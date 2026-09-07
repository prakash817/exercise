import { NextResponse } from "next/server";
import { createPolicy, getAllPolicies } from "@/lib/db/policies";

export async function GET() {
  return NextResponse.json(getAllPolicies());
}

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const result = createPolicy(body);
  if ("error" in result) {
    return NextResponse.json({ error: result.error }, { status: result.status });
  }

  return NextResponse.json(result.policy, { status: 201 });
}
