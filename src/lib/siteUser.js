const STORAGE_KEY = "user";

export function persistSiteUser({ userId, name }) {
  if (typeof window === "undefined" || !userId) return;

  window.localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify({ userId, name: name ?? "" }),
  );
}

export function getStoredSiteUser() {
  if (typeof window === "undefined") return null;

  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;

    const parsed = JSON.parse(raw);
    if (typeof parsed === "string" && parsed.trim()) {
      return { userId: parsed.trim(), name: "" };
    }

    const userId = parsed?.userId ?? parsed?.id;
    if (!userId) return null;

    return { userId: String(userId), name: parsed.name ?? "" };
  } catch {
    return null;
  }
}
