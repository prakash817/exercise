import { NextResponse } from "next/server";
import {
  deleteAdvisor,
  getAdvisorById,
  replaceAdvisor,
  updateAdvisor,
} from "@/lib/db/advisors";

export async function GET(_request, { params }) {
  const { userId } = await params;
  const advisor = getAdvisorById(userId);
  if (!advisor) {
    return NextResponse.json({ error: "Advisor not found" }, { status: 404 });
  }
  return NextResponse.json(advisor);
}

export async function PUT(request, { params }) {
  const { userId } = await params;
  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const result = replaceAdvisor(userId, body);
  if ("error" in result) {
    return NextResponse.json({ error: result.error }, { status: result.status });
  }
  return NextResponse.json(result.advisor);
}

export async function PATCH(request, { params }) {
  const { userId } = await params;
  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const result = updateAdvisor(userId, body);
  if ("error" in result) {
    return NextResponse.json({ error: result.error }, { status: result.status });
  }
  return NextResponse.json(result.advisor);
}

export async function DELETE(_request, { params }) {
  const { userId } = await params;
  const result = deleteAdvisor(userId);
  if ("error" in result) {
    return NextResponse.json({ error: result.error }, { status: result.status });
  }
  return NextResponse.json(result.advisor);
}
