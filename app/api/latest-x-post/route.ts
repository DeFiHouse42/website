import { NextResponse } from "next/server";

const CACHE_DURATION = 60 * 60; // 1 hour
const USERID = "1967662780024082432";

export const dynamic = "force-dynamic";
export const revalidate = false;

export async function GET() {
  try {
    const bearerToken = process.env.X_BEARER_TOKEN;

    if (!bearerToken) {
      console.error("X_BEARER_TOKEN not configured");
      return NextResponse.json({ tweetId: null }, { status: 500 });
    }

    const tweetsResponse = await fetch(
      `https://api.x.com/2/users/${USERID}/tweets?max_results=1&exclude=retweets,replies`,
      {
        headers: { Authorization: `Bearer ${bearerToken}` },
        next: { revalidate: 900 },
      }
    );

    if (!tweetsResponse.ok) {
      console.warn(`X API error: ${tweetsResponse.status}`);
      console.log("Tweets data:", tweetsResponse.statusText);
      return NextResponse.json(
        { tweetId: null },
        { status: tweetsResponse.status }
      );
    }

    const tweetsData = await tweetsResponse.json();
    const tweetId = tweetsData.data?.[0]?.id;

    if (!tweetId) {
      console.warn("No tweets found");
      console.log("Tweets data:", tweetsData);
      return NextResponse.json({ tweetId: null }, { status: 404 });
    }

    return NextResponse.json(
      { tweetId },
      {
        headers: {
          "Cache-Control": `public, s-maxage=${CACHE_DURATION}, stale-while-revalidate=${CACHE_DURATION}`,
        },
      }
    );
  } catch (error) {
    console.error("Unexpected error:", error);
    return NextResponse.json({ tweetId: null }, { status: 500 });
  }
}
