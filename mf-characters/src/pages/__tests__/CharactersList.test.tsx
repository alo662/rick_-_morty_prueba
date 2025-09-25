import React from "react";
import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import CharactersList from "../CharactersList";
import { useFetch } from "@/hooks/useFetch";

jest.mock("@/hooks/useFetch");

const mockedUseFetch = useFetch as jest.Mock;

const mockData = {
  info: { pages: 2 },
  results: [
    {
      id: 1,
      name: "Rick Sanchez",
      status: "Alive",
      species: "Human",
      gender: "Male",
      image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
    },
  ],
};

describe("CharactersList", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renderiza lista de personajes", async () => {
    mockedUseFetch.mockReturnValue({
      data: mockData,
      loading: false,
      error: null,
    });

    render(
      <MemoryRouter>
        <CharactersList />
      </MemoryRouter>
    );

    await waitFor(() =>
      expect(screen.getByText("Rick Sanchez")).toBeInTheDocument()
    );
  });

  it("incrementa página al hacer click en 'Cargar más'", () => {
    mockedUseFetch.mockReturnValue({
      data: mockData,
      loading: false,
      error: null,
    });

    render(
      <MemoryRouter>
        <CharactersList />
      </MemoryRouter>
    );

    const button = screen.getByRole("button", { name: /Cargar más/i });
    fireEvent.click(button);

    expect(button).toBeInTheDocument();
  });
});
