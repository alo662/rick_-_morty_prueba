import React, { useMemo, useState } from "react";
import { fetchCharacters } from "../services/characters.api";
import type { Character, CharacterFilters } from "../interfaces/rick.interface";
import Filters from "./components/Filters";
import Card from "./components/Card";
import Loader from "./components/Loader";
import { useFetch } from "../hooks/useFetch";

const CharactersList: React.FC = () => {
  const [filters, setFilters] = useState<CharacterFilters>({});
  const [page, setPage] = useState(1);

  const query = useMemo(
    () => ({
      name: filters.name?.trim() || undefined,
      status: filters.status,
      species: filters.species?.trim() || undefined,
    }),
    [filters]
  );

  const { data, loading, error } = useFetch(
    (signal) => fetchCharacters(page, query, signal),
    [page, query]
  );

  return (
    <section className="w-full h-full">
      <h1 className="text-3xl font-extrabold mb-8 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
        Personajes
      </h1>

      <Filters value={filters} onChange={setFilters} />

      {error && (
        <p role="alert" className="text-error font-semibold mt-4">
          {error}
        </p>
      )}

      {loading && page === 1 ? (
        <Loader />
      ) : (
        <div className="mt-8 grid gap-6 grid-cols-[repeat(auto-fill,minmax(180px,1fr))]">
          {data?.results.map((ch: Character) => (
            <Card key={ch.id} c={ch} />
          ))}
        </div>
      )}

      {!error && (
        <div className="flex items-center justify-between mt-10">
          <p className="text-sm text-slate-400">
            Página <span className="font-semibold">{page}</span> de{" "}
            {data?.info?.pages ?? 0}
          </p>

          <button
            className="px-5 py-2 mb-2 bg-primary text-white rounded-lg shadow hover:bg-primary-dark disabled:bg-neutral disabled:cursor-not-allowed transition"
            disabled={loading || page >= (data?.info?.pages ?? 0)}
            onClick={() => setPage((p) => p + 1)}
          >
            {loading
              ? "Cargando…"
              : page < (data?.info?.pages ?? 0)
              ? "Cargar más"
              : "No hay más"}
          </button>
        </div>
      )}
    </section>
  );
};

export default CharactersList;
