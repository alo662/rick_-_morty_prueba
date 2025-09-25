import { httpGet, endpoints } from '../shared/fetcher';
import type { Character, CharacterFilters, PagedResponse } from '../interfaces/rick.interface';

export async function fetchCharacters(page: number, filters: CharacterFilters, signal?: AbortSignal) {
  const url = endpoints.characters(page, filters);
  return httpGet<PagedResponse<Character>>(url, signal);
}
