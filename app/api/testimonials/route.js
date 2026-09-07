import { NextResponse } from "next/server";
import { createTestimonial, listTestimonials } from "@/lib/db/testimonials";

export async function GET() {
  return NextResponse.json(listTestimonials());
}

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const result = createTestimonial(body);
  if ("error" in result) {
    return NextResponse.json({ error: result.error }, { status: result.status });
  }

  return NextResponse.json(result.testimonial, { status: 201 });
}
