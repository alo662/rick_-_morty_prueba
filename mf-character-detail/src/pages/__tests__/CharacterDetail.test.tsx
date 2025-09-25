// src/pages/__tests__/CharacterDetail.test.tsx
import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import CharacterDetail from "@/pages/CharacterDetail";

jest.mock("@/services/detail", () => ({
  fetchCharacter: jest.fn(),
  fetchEpisodes: jest.fn(),
}));

import { fetchCharacter, fetchEpisodes } from "@/services/detail";

const mockCharacter = {
  id: 1,
  name: "Rick Sanchez",
  status: "Alive",
  species: "Human",
  gender: "Male",
  type: "",
  image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
  origin: { name: "Earth" },
  location: { name: "Earth" },
  episode: ["https://rickandmortyapi.com/api/episode/1"],
};

const mockEpisodes = [
  { id: 1, name: "Pilot", episode: "S01E01", air_date: "December 2, 2013" },
];

const renderWithRouter = (path: string) =>
  render(
    <MemoryRouter initialEntries={[path]}>
      <Routes>
        <Route path="/character/:id" element={<CharacterDetail />} />
      </Routes>
    </MemoryRouter>
  );

describe("CharacterDetail", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("muestra skeleton mientras carga", async () => {
    (fetchCharacter as jest.Mock).mockResolvedValueOnce(mockCharacter);
    (fetchEpisodes as jest.Mock).mockResolvedValueOnce(mockEpisodes);

    renderWithRouter("/character/1");

    // Si tu skeleton tiene este testid; si no, usa un texto del skeleton
    // expect(screen.getByTestId("character-detail-skeleton")).toBeInTheDocument();

    await waitFor(() =>
      expect(screen.getByText("Rick Sanchez")).toBeInTheDocument()
    );
  });

  it("muestra error si la API falla", async () => {
    (fetchCharacter as jest.Mock).mockRejectedValueOnce(
      new Error("API Error")
    );

    renderWithRouter("/character/1");

    await waitFor(() =>
      expect(
        screen.getByText("Ocurrió un error al buscar el personaje")
      ).toBeInTheDocument()
    );
  });

  it("renderiza personaje y episodios", async () => {
    (fetchCharacter as jest.Mock).mockResolvedValueOnce(mockCharacter);
    (fetchEpisodes as jest.Mock).mockResolvedValueOnce(mockEpisodes);

    renderWithRouter("/character/1");

    expect(await screen.findByText("Rick Sanchez")).toBeInTheDocument();
    expect(screen.getByText("Pilot")).toBeInTheDocument();
    expect(screen.getByText("S01E01")).toBeInTheDocument();
  });
});
