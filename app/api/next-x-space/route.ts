// app/api/space/route.ts
import { kv } from "@vercel/kv";
import { NextResponse } from "next/server";

const SPACE_KEY = "current_space_id";
const CACHE_DURATION = 60; // 1 min cache for GET

// key to allow setting
const SET_SECRET = process.env.SPACE_SET_SECRET; // e.g., "my-secret-123"

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const space_id = searchParams.get("space_id");
    const secret = searchParams.get("secret");

    // If space_id is provided, update it (like POST)
    if (space_id) {
      if (SET_SECRET && secret !== SET_SECRET) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
      }

      if (typeof space_id !== "string" || space_id.length < 10) {
        return NextResponse.json(
          { error: "Invalid space_id" },
          { status: 400 }
        );
      }

      await kv.set(SPACE_KEY, space_id, { ex: 60 * 60 * 24 * 30 }); // 30 days

      return NextResponse.json({
        success: true,
        space_url: `https://x.com/i/spaces/${space_id}`,
      });
    }

    // Otherwise, just return the current space
    const currentSpaceId = await kv.get(SPACE_KEY);

    if (!currentSpaceId || typeof currentSpaceId !== "string") {
      return NextResponse.json(
        { space_url: null },
        {
          headers: {
            "Cache-Control": `public, s-maxage=${CACHE_DURATION}, stale-while-revalidate=60`,
          },
        }
      );
    }

    const spaceUrl = `https://x.com/i/spaces/${currentSpaceId}`;

    return NextResponse.json(
      { space_url: spaceUrl },
      {
        headers: {
          "Cache-Control": `public, s-maxage=${CACHE_DURATION}, stale-while-revalidate=60`,
        },
      }
    );
  } catch (error) {
    console.error("GET space error:", error);
    return NextResponse.json(
      { error: "Failed to process request" },
      { status: 500 }
    );
  }
}
// https://x.com/i/spaces/1ZkKzZEROYDKv?s=20
