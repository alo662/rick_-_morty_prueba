import { renderHook, waitFor } from "@testing-library/react";
import { useFetch } from "../useFetch";

describe("useFetch", () => {
  it("debe iniciar con estado inicial correcto", async () => {
    const fetchFn = jest.fn().mockResolvedValueOnce({});

    const { result } = renderHook(() => useFetch(fetchFn, []));

    expect(result.current.data).toBeNull();
    expect(result.current.loading).toBe(true);
    expect(result.current.error).toBeNull();

    await waitFor(() => {
      expect(result.current.loading).toBe(false);
    });
  });

  it("resuelve datos de manera correcta", async () => {
    const mockData = { foo: "bar" };
    const fetchFn = jest.fn().mockResolvedValueOnce(mockData);

    const { result } = renderHook(() => useFetch(fetchFn, []));

    await waitFor(() => {
      expect(result.current.data).toEqual(mockData);
      expect(result.current.loading).toBe(false);
      expect(result.current.error).toBeNull();
    });
  });

  it("maneja error del api", async () => {
    const fetchFn = jest.fn().mockRejectedValueOnce(new Error("API Error"));

    const { result } = renderHook(() => useFetch(fetchFn, []));

    await waitFor(() => {
      expect(result.current.data).toBeNull();
      expect(result.current.error).toBe("API Error");
      expect(result.current.loading).toBe(false);
    });
  });

  it("maneja error 404 limpiando datos", async () => {
    const fetchFn = jest
      .fn()
      .mockRejectedValueOnce({ status: 404, message: "404 Not Found" });

    const { result } = renderHook(() => useFetch(fetchFn, []));

    await waitFor(() => {
      expect(result.current.data).toBeNull();
      expect(result.current.error).toBe("No se encontraron resultados");
      expect(result.current.loading).toBe(false);
    });
  });

  it("ignora AbortError sin setear error", async () => {
    const fetchFn = jest.fn().mockRejectedValueOnce({ name: "AbortError" });

    const { result } = renderHook(() => useFetch(fetchFn, []));

    await waitFor(() => {
      expect(result.current.data).toBeNull();
      expect(result.current.error).toBeNull();
      expect(result.current.loading).toBe(false);
    });
  });
});
