import { httpGet, endpoints } from '../shared/fetcher';
import type { Character, Episode } from '../interfaces/rick.interface';

export const fetchCharacter = (id: number | string, signal?: AbortSignal) =>
  httpGet<Character>(endpoints.character(id), signal);

export const fetchEpisodes = (episodeUrls: string[], signal?: AbortSignal) => {
  const ids = episodeUrls
    .map(u => Number(u.split('/').pop()))
    .filter(n => Number.isFinite(n)) as number[];

  if (ids.length === 0) return Promise.resolve([] as Episode[]);

  return httpGet<Episode | Episode[]>(endpoints.episodesBulk(ids), signal).then((data) =>
    Array.isArray(data) ? data : [data]
  );
};
