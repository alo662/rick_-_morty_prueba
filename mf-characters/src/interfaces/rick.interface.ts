export interface Character {
  id: number;
  name: string;
  status: "Alive" | "Dead" | "unknown";
  species: string;
  type: string;
  gender: "Female" | "Male" | "Genderless" | "unknown";
  image: string;
  episode: string[];
  origin?: { name: string; url: string };
  location?: { name: string; url: string };
}

export interface PagedResponse<T> {
  info: {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
  };
  results: T[];
}

export interface CharacterFilters {
  name?: string;
  status?: "alive" | "dead" | "unknown";
  species?: string;
}

export interface FetchState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}
