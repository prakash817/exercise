import { NextResponse } from "next/server";
import { createAdvisor, getAllAdvisors } from "@/lib/db/advisors";

export async function GET() {
  return NextResponse.json(getAllAdvisors());
}

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const result = createAdvisor(body);
  if ("error" in result) {
    return NextResponse.json({ error: result.error }, { status: result.status });
  }

  return NextResponse.json(result.advisor, { status: 201 });
}
