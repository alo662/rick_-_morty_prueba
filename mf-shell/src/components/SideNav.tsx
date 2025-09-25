import React from "react";
import { Link } from "react-router-dom";
import { SideNavProps } from "../shared/interfaces/shell.interfaces";

const SideNav: React.FC<SideNavProps> = ({ open, onClose }) => {
  const today = new Date();

  return (
    <>
      {open && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={onClose}
        ></div>
      )}

      <aside
        className={`fixed z-40 inset-y-0 left-0 transform bg-white shadow-lg w-64 transition-transform duration-300 ease-in-out 
          ${open ? "translate-x-0" : "-translate-x-full"} 
          md:translate-x-0 md:static md:inset-auto`}
      >
        <div className="px-6 py-4 h-[60px] text-xl font-extrabold text-primary flex items-center">
          Rick & Morty
        </div>

        <nav className="flex-1 px-4 py-6 space-y-2">
          <Link
            to="/"
            className="block px-4 py-2 rounded-lg text-gray-700 font-medium hover:bg-primary hover:text-white transition"
            onClick={onClose}
          >
            Inicio
          </Link>
          <Link
            to="/characters"
            className="block px-4 py-2 rounded-lg text-gray-700 font-medium hover:bg-secondary hover:text-white transition"
            onClick={onClose}
          >
            Ver personajes
          </Link>
        </nav>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-gray-200 text-xs text-gray-500">
          <p>© {today.getFullYear()} Examen Rick & Morty</p>
          <p className="text-accent font-semibold">Jared De la O</p>
        </div>
      </aside>
    </>
  );
};

export default SideNav;
