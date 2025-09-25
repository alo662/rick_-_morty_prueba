import { useEffect, useRef, useState } from "react";
import { FetchState } from "../interfaces/rick.interface";

export function useFetch<T>(
  fetchFn: (signal: AbortSignal) => Promise<T>,
  deps: any[] = []
): FetchState<T> {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const abortRef = useRef<AbortController | null>(null);

  useEffect(() => {
    abortRef.current?.abort();
    const ac = new AbortController();
    abortRef.current = ac;

    (async () => {
      setLoading(true);
      setError(null);
      try {
        const result = await fetchFn(ac.signal);
        setData(result);
      } catch (e: any) {
        if (e.name === "AbortError") return; // ignorar cancelaciones

        setData(null); // 🚀 limpiar datos al fallar
        if (e.status === 404 || e.message?.includes("404")) {
          setError("No se encontraron resultados");
        } else {
          setError(e.message || "Error al cargar datos");
        }
      } finally {
        setLoading(false);
      }
    })();

    return () => ac.abort();
  }, deps);

  return { data, loading, error };
}
