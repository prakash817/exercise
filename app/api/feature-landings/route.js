import { NextResponse } from "next/server";
import { getFeatureLandings } from "@/lib/landing";

export async function GET(request) {
  const userId = new URL(request.url).searchParams.get("userId")?.trim();
  if (!userId) {
    return NextResponse.json({ error: "userId is required" }, { status: 400 });
  }

  return NextResponse.json(getFeatureLandings(userId));
}
