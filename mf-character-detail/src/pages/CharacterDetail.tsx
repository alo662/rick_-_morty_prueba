import React, { useEffect, useRef, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchCharacter, fetchEpisodes } from "@/services/detail";
import type { Character, Episode } from "../interfaces/rick.interface";
import CharacterDetailSkeleton from "./components/CharacterDetailSkeleton";

const CharacterDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [character, setCharacter] = useState<Character | null>(null);
  const [episodes, setEpisodes] = useState<Episode[]>([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState<string | null>(null);
  const acRef = useRef<AbortController | null>(null);
  const errorMessage: string = "Ocurrió un error al buscar el personaje";

  useEffect(() => {
    if (!id || isNaN(Number(id))) {
      setErr(errorMessage);
      setLoading(false);
      return;
    }

    acRef.current?.abort();
    const ac = new AbortController();
    acRef.current = ac;

    (async () => {
      try {
        const ch = await fetchCharacter(Number(id), ac.signal);
        if (!ch) {
          setErr(errorMessage);
          return;
        }
        setCharacter(ch);
        const eps = await fetchEpisodes(ch.episode, ac.signal);
        eps.sort((a, b) => a.episode.localeCompare(b.episode));
        setEpisodes(eps);
      } catch (e: any) {
        setErr(errorMessage);
      } finally {
        setLoading(false);
      }
    })();

    return () => ac.abort();
  }, [id]);

  if (loading) return <CharacterDetailSkeleton />;

  if (err) {
    return (
      <section className="w-full flex flex-col items-center text-center py-12">
        <div className="max-w-md bg-red-50 border border-red-200 text-red-700 px-8 py-6 rounded-xl shadow-md">
          <p className="text-lg font-bold flex items-center gap-2">Error</p>
          <p className="mt-2">{err}</p>
          <Link
            to="/characters"
            className="mt-6 inline-block px-5 py-2 rounded-lg bg-primary text-white font-medium shadow hover:bg-primary-dark transition"
          >
            Volver al listado
          </Link>
        </div>
      </section>
    );
  }

  if (!character) {
    return (
      <section className="w-full flex flex-col items-center text-center py-12">
        <div className="max-w-md bg-yellow-50 border border-yellow-200 text-yellow-700 px-8 py-6 rounded-xl shadow-md">
          <p className="text-lg font-bold flex items-center gap-2">
            Personaje no encontrado
          </p>
          <Link
            to="/characters"
            className="mt-6 inline-block px-5 py-2 rounded-lg bg-primary text-white font-medium shadow hover:bg-primary-dark transition"
          >
            Volver al listado
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="space-y-10">
      <h1 className="text-3xl font-extrabold text-gray-800 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
        {character.name}
      </h1>

      <div className="grid md:grid-cols-[280px,1fr] gap-8 items-start bg-white rounded-xl shadow p-6">
        <img
          src={character.image}
          alt={character.name}
          className="rounded-xl w-full max-w-xs shadow-md"
        />
        <div className="space-y-3 text-gray-700">
          <p>
            <span className="font-semibold">Estado:</span> {character.status}
          </p>
          <p>
            <span className="font-semibold">Género:</span> {character.gender}
          </p>
          <p>
            <span className="font-semibold">Especie:</span> {character.species}
          </p>
          {character.type && (
            <p>
              <span className="font-semibold">Tipo:</span> {character.type}
            </p>
          )}
          {character.origin?.name && (
            <p>
              <span className="font-semibold">Origen:</span>{" "}
              {character.origin.name}
            </p>
          )}
          {character.location?.name && (
            <p>
              <span className="font-semibold">Ubicación:</span>{" "}
              {character.location.name}
            </p>
          )}
          <Link
            to="/characters"
            className="inline-block mt-4 text-primary font-medium hover:underline"
          >
            Volver al listado
          </Link>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-accent">Episodios</h2>
      <div className="grid gap-6 grid-cols-[repeat(auto-fill,minmax(240px,1fr))]">
        {episodes.map((ep) => (
          <article
            key={ep.id}
            className="relative bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-lg hover:border-primary transition group"
          >
            <h3 className="font-bold text-lg text-primary group-hover:text-accent transition">
              {ep.name}
            </h3>
            <span className="inline-block mt-2 text-xs px-2 py-1 rounded-full bg-accent text-white font-medium">
              {ep.episode}
            </span>
            <p className="text-sm text-gray-600 mt-3">
              <span className="font-semibold text-gray-700">Fecha:</span>{" "}
              {ep.air_date}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default CharacterDetail;
