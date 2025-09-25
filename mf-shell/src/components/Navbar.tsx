import React from "react";
import { NavbarProps } from "../shared/interfaces/shell.interfaces";

const Navbar: React.FC<NavbarProps> = ({ onToggleSidebar }) => {
  return (
    <header className="h-[60px] bg-primary shadow flex items-center justify-between px-6 w-full">
      <button
        className="md:hidden p-2 text-white hover:bg-white/20 rounded-lg"
        onClick={onToggleSidebar}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      <h1 className="text-lg font-bold text-white tracking-wide">Inicio</h1>

      <div className="flex items-center space-x-4">
        <span className="text-sm text-white/90 hidden sm:block font-medium">
          Hola compañero PASE
        </span>
        <img
          src="https://rickandmortyapi.com/api/character/avatar/7.jpeg"
          alt="avatar"
          className="w-10 h-10 rounded-full border-2 border-white ring-2 ring-accent/70"
        />
      </div>
    </header>
  );
};

export default Navbar;
