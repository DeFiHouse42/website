import { NextResponse } from "next/server";

const CACHE_DURATION = 900; // 15 min
const USERID = "1967662780024082432";
const BEARER_TOKEN = process.env.X_BEARER_TOKEN;

export const dynamic = "force-dynamic";
export const revalidate = false;

export async function GET() {
  try {
    if (!BEARER_TOKEN) {
      console.error("X_BEARER_TOKEN not configured");
      return NextResponse.json({ tweetId: null }, { status: 500 });
    }

    const res = await fetch(
      `https://api.x.com/2/users/${USERID}/tweets?max_results=1&exclude=retweets,replies`,
      {
        headers: { Authorization: `Bearer ${BEARER_TOKEN}` },
        next: { revalidate: 900 },
      }
    );

    if (!res.ok) {
      console.warn(`X API error: ${res.status}`);
      console.log("Tweets data:", res.statusText);
      return NextResponse.json({ tweetId: null }, { status: res.status });
    }

    const tweetsData = await res.json();
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
