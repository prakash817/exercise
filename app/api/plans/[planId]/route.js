import { NextResponse } from "next/server";
import {
  deletePlan,
  getPlanById,
  replacePlan,
  updatePlan,
} from "@/lib/db/plans";

export async function GET(_request, { params }) {
  const { planId } = await params;
  const plan = getPlanById(planId);
  if (!plan) {
    return NextResponse.json({ error: "Plan not found" }, { status: 404 });
  }
  return NextResponse.json(plan);
}

export async function PUT(request, { params }) {
  const { planId } = await params;
  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const result = replacePlan(planId, body, body.collection ?? "feature");
  if ("error" in result) {
    return NextResponse.json({ error: result.error }, { status: result.status });
  }
  return NextResponse.json(result.plan);
}

export async function PATCH(request, { params }) {
  const { planId } = await params;
  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const result = updatePlan(planId, body, body.collection ?? "feature");
  if ("error" in result) {
    return NextResponse.json({ error: result.error }, { status: result.status });
  }
  return NextResponse.json(result.plan);
}

export async function DELETE(request, { params }) {
  const { planId } = await params;
  const { searchParams } = new URL(request.url);
  const result = deletePlan(
    planId,
    searchParams.get("collection") ?? "feature",
  );
  if ("error" in result) {
    return NextResponse.json({ error: result.error }, { status: result.status });
  }
  return NextResponse.json(result.plan);
}
