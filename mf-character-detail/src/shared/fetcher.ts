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

export const endpoints = {
  character: (id: number | string) => `${BASE}/character/${id}`,
  episodesBulk: (ids: number[]) => `${BASE}/episode/${ids.join(",")}`,
};
