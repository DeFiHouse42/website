import { NextResponse } from "next/server";

export async function GET() {
  try {
    const username = "defihouse42";
    const bearerToken = process.env.X_BEARER_TOKEN;

    if (!bearerToken) {
      return NextResponse.json(
        { error: "Twitter API token not configured" },
        { status: 500 }
      );
    }

    // First, get the user ID
    const userResponse = await fetch(
      `https://api.x.com/2/users/by/username/${username}`,
      {
        headers: {
          Authorization: `Bearer ${bearerToken}`,
        },
      }
    );

    if (!userResponse.ok) {
      throw new Error("Failed to fetch user data");
    }

    const userData = await userResponse.json();
    const userId = userData.data.id;

    // Get the latest tweet
    const tweetsResponse = await fetch(
      `https://api.x.com/2/users/${userId}/tweets?max_results=5&exclude=retweets,replies`,
      {
        headers: {
          Authorization: `Bearer ${bearerToken}`,
        },
      }
    );

    if (!tweetsResponse.ok) {
      throw new Error("Failed to fetch tweets");
    }

    const tweetsData = await tweetsResponse.json();

    if (!tweetsData.data || tweetsData.data.length === 0) {
      return NextResponse.json({ error: "No tweets found" }, { status: 404 });
    }

    const latestTweetId = tweetsData.data[0].id;

    return NextResponse.json({ tweetId: latestTweetId });
  } catch (error) {
    console.error("Error fetching latest tweet:", error);
    return NextResponse.json(
      { error: "Failed to fetch latest tweet" },
      { status: 500 }
    );
  }
}
