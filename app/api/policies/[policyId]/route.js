import { NextResponse } from "next/server";
import {
  deletePolicy,
  getPolicyById,
  replacePolicy,
  updatePolicy,
} from "@/lib/db/policies";

export async function GET(_request, { params }) {
  const { policyId } = await params;
  const policy = getPolicyById(policyId);
  if (!policy) {
    return NextResponse.json({ error: "Policy not found" }, { status: 404 });
  }
  return NextResponse.json(policy);
}

export async function PUT(request, { params }) {
  const { policyId } = await params;
  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const result = replacePolicy(policyId, body);
  if ("error" in result) {
    return NextResponse.json({ error: result.error }, { status: result.status });
  }
  return NextResponse.json(result.policy);
}

export async function PATCH(request, { params }) {
  const { policyId } = await params;
  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const result = updatePolicy(policyId, body);
  if ("error" in result) {
    return NextResponse.json({ error: result.error }, { status: result.status });
  }
  return NextResponse.json(result.policy);
}

export async function DELETE(_request, { params }) {
  const { policyId } = await params;
  const result = deletePolicy(policyId);
  if ("error" in result) {
    return NextResponse.json({ error: result.error }, { status: result.status });
  }
  return NextResponse.json(result.policy);
}
