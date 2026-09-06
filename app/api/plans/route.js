import { NextResponse } from "next/server";
import { createPlan, listPlans } from "@/lib/db/plans";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const plans = listPlans({
    collection: searchParams.get("collection") ?? "feature",
    plan_type: searchParams.get("plan_type") ?? undefined,
    featured: searchParams.get("featured") ?? undefined,
  });

  return NextResponse.json(plans);
}

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const collection = body.collection ?? "feature";
  const result = createPlan(body, collection);
  if ("error" in result) {
    return NextResponse.json({ error: result.error }, { status: result.status });
  }

  return NextResponse.json(result.plan, { status: 201 });
}
