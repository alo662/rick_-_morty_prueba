import React from "react";
import { NavbarProps } from "../shared/interfaces/shell.interfaces";

const Navbar: React.FC<NavbarProps> = ({ onToggleSidebar }) => {
  return (
    <header className="h-[60px] bg-surface-raised border-b border-surface-border shadow-sm shadow-black/30 flex items-center justify-between px-6 w-full">
      <button
        className="md:hidden p-2 text-slate-300 hover:bg-white/10 rounded-lg"
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

      <h1 className="text-lg font-bold text-slate-100 tracking-wide">Inicio</h1>

      <div className="flex items-center space-x-4">
        <span className="text-sm text-neutral hidden sm:block font-medium">
          Hola compañero PASE
        </span>
        <img
          src="https://rickandmortyapi.com/api/character/avatar/7.jpeg"
          alt="avatar"
          className="w-10 h-10 rounded-full border-2 border-primary/50 ring-2 ring-accent/50"
        />
      </div>
    </header>
  );
};

export default Navbar;
