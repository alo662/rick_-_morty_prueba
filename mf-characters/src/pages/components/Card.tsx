import React from "react";
import type { Character } from "../../interfaces/rick.interface";
import { Link } from "react-router-dom";
import '../../index.css'
const Card: React.FC<{ c: Character }> = ({ c }) => {
  return (
    <article className="w-full mx-auto bg-white border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition transform hover:-translate-y-1 flex flex-col">
      <img src={c.image} alt={c.name} className="w-full  object-cover" />

      <div className="p-3 flex-1 flex flex-col">
        <h3 className="font-semibold text-sm text-gray-800 truncate">
          {c.name}
        </h3>

        <div className="flex gap-1 mt-1 flex-wrap">
          <span className="text-[10px] px-2 py-0.5 rounded-full bg-primary/10 text-primary font-medium">
            {c.gender}
          </span>
          <span
            className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${
              c.status === "Alive"
                ? "bg-success/10 text-success"
                : c.status === "Dead"
                ? "bg-error/10 text-error"
                : "bg-gray-200 text-gray-600"
            }`}
          >
            {c.status}
          </span>
        </div>

        <p className="text-xs text-gray-500 mt-2 flex-1 truncate">
          {c.species}
        </p>

        <Link
          to={`/character/${c.id}`}
          className="mt-3 inline-block px-3 py-1.5 bg-accent text-white text-xs font-medium rounded-md hover:bg-accent-dark transition text-center"
        >
          Detalle →
        </Link>
      </div>
    </article>
  );
};

export default Card;
