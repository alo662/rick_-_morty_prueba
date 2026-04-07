import React from "react";
import { Link } from "react-router-dom";
import { SideNavProps } from "../shared/interfaces/shell.interfaces";

const SideNav: React.FC<SideNavProps> = ({ open, onClose }) => {
  const today = new Date();

  return (
    <>
      {open && (
        <div
          className="fixed inset-0 bg-black/60 z-30 md:hidden"
          onClick={onClose}
        ></div>
      )}

      <aside
        className={`fixed z-40 inset-y-0 left-0 transform bg-surface-raised border-r border-surface-border shadow-xl shadow-black/20 w-64 transition-transform duration-300 ease-in-out 
          ${open ? "translate-x-0" : "-translate-x-full"} 
          md:translate-x-0 md:static md:inset-auto`}
      >
        <div className="px-6 py-4 h-[60px] text-xl font-extrabold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent flex items-center">
          Rick & Morty
        </div>

        <nav className="flex-1 px-4 py-6 space-y-2">
          <Link
            to="/"
            className="block px-4 py-2 rounded-lg text-slate-300 font-medium hover:bg-primary/15 hover:text-primary-light transition"
            onClick={onClose}
          >
            Inicio
          </Link>
          <Link
            to="/characters"
            className="block px-4 py-2 rounded-lg text-slate-300 font-medium hover:bg-secondary/15 hover:text-secondary-light transition"
            onClick={onClose}
          >
            Ver personajes
          </Link>
        </nav>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-surface-border text-xs text-neutral-dark">
          <p>© {today.getFullYear()} Examen Rick & Morty</p>
          <p className="text-accent font-semibold">Alonso Medina</p>
        </div>
      </aside>
    </>
  );
};

export default SideNav;
