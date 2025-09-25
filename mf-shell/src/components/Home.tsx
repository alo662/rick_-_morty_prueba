import React from "react";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <div className="flex flex-col items-center text-center mt-12 space-y-6 px-4">
      <h2 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
        Bienvenido al Portal Rick & Morty
      </h2>

      <div className="space-y-1">
        <p className="text-neutral text-lg">
          Explora los diferentes personajes dando click en la tarjeta de abajo
        </p>
        <p className="text-neutral text-lg">
          También puedes utilizar la barra lateral para navegar
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 w-full max-w-md">
        <Link
          to="/characters"
          className="flex flex-col items-center justify-center p-6 rounded-xl shadow-lg bg-white border border-gray-200 hover:border-primary hover:shadow-primary/40 hover:shadow-xl transition transform hover:-translate-y-1"
        >
          <img
            src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
            alt="Characters"
            className="w-24 h-24 rounded-full mb-4 ring-4 ring-primary/30"
          />
          <h3 className="text-xl font-semibold text-gray-800">
            <span className="text-primary">Ver personajes</span>
          </h3>
          <p className="text-sm text-gray-600 mt-2">
            Navega por todos los personajes de Rick & Morty
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Home;
