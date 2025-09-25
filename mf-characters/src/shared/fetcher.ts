const BASE = "https://rickandmortyapi.com/api";

export async function httpGet<T>(
  url: string,
  signal?: AbortSignal
): Promise<T> {
  const res = await fetch(url, { signal });

  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(`HTTP ${res.status} - ${text}`);
  }

  return res.json() as Promise<T>;
}

export const buildQuery = (params: Record<string, string | undefined>) => {
  const usp = new URLSearchParams();
  Object.entries(params).forEach(([k, v]) => {
    if (v) usp.set(k, v);
  });
  return usp.toString();
};

export const endpoints = {
  characters: (
    page = 1,
    filters?: { name?: string; status?: string; species?: string }
  ) => `${BASE}/character/?page=${page}&${buildQuery(filters ?? {})}`,
};
