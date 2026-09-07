import { siteConfig } from "@/config/siteConfig";

const globalForDb = globalThis;

function initTestimonialsDb() {
  if (globalForDb.testimonialsDb) {
    return globalForDb.testimonialsDb;
  }

  return structuredClone(siteConfig.testimonials);
}

export const testimonialsDb = initTestimonialsDb();

if (process.env.NODE_ENV !== "production") {
  globalForDb.testimonialsDb = testimonialsDb;
}

export function listTestimonials() {
  return testimonialsDb;
}

export function createTestimonial(data) {
  const name = data.name?.trim();
  const role = data.role?.trim();
  const comment = data.comment?.trim();
  const rating = Number(data.rating);

  if (!name || !role || !comment) {
    return {
      error: "name, role, and comment are required",
      status: 400,
    };
  }

  if (!Number.isFinite(rating) || rating < 1 || rating > 5) {
    return { error: "rating must be a number between 1 and 5", status: 400 };
  }

  const nextId =
    data.id != null
      ? Number(data.id)
      : testimonialsDb.reduce((max, item) => Math.max(max, item.id), 0) + 1;

  if (testimonialsDb.some((item) => item.id === nextId)) {
    return { error: "Testimonial with this id already exists", status: 409 };
  }

  const testimonial = {
    id: nextId,
    name,
    role,
    rating,
    comment,
    image: data.image ?? "",
  };

  testimonialsDb.push(testimonial);
  return { testimonial };
}
