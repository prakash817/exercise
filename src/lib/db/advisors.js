import { seedAdvisors } from "@/lib/db/seed";

const globalForDb = globalThis;

function initAdvisorsDb() {
  const db = globalForDb.advisorsDb ?? structuredClone(seedAdvisors);

  for (const advisor of seedAdvisors) {
    if (!db.some((item) => item.id === advisor.id)) {
      db.push(structuredClone(advisor));
    }
  }

  return db;
}

export const advisorsDb = initAdvisorsDb();
if (process.env.NODE_ENV !== "production") {
  globalForDb.advisorsDb = advisorsDb;
}
export function getAllAdvisors() {
    return advisorsDb;
}
export function getAdvisorById(userId) {
    return advisorsDb.find((advisor) => advisor.id === userId);
}
export function createAdvisor(data) {
    if (!data.id?.trim()) {
        return { error: "Advisor id is required", status: 400 };
    }
    if (getAdvisorById(data.id)) {
        return { error: "Advisor with this id already exists", status: 409 };
    }
    advisorsDb.push(data);
    return { advisor: data };
}
export function replaceAdvisor(userId, data) {
    const index = advisorsDb.findIndex((advisor) => advisor.id === userId);
    if (index === -1) {
        return { error: "Advisor not found", status: 404 };
    }
    if (data.id !== userId) {
        return { error: "Advisor id in body must match URL", status: 400 };
    }
    advisorsDb[index] = data;
    return { advisor: data };
}
export function updateAdvisor(userId, data) {
    const index = advisorsDb.findIndex((advisor) => advisor.id === userId);
    if (index === -1) {
        return { error: "Advisor not found", status: 404 };
    }
    if (data.id && data.id !== userId) {
        return { error: "Advisor id cannot be changed", status: 400 };
    }
    const updated = { ...advisorsDb[index], ...data, id: userId };
    advisorsDb[index] = updated;
    return { advisor: updated };
}
export function deleteAdvisor(userId) {
    const index = advisorsDb.findIndex((advisor) => advisor.id === userId);
    if (index === -1) {
        return { error: "Advisor not found", status: 404 };
    }
    const [removed] = advisorsDb.splice(index, 1);
    return { advisor: removed };
}
