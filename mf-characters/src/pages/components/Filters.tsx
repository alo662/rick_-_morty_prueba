import React from "react";
import type { CharacterFilters } from "../../interfaces/rick.interface";

const Filters: React.FC<{
  value: CharacterFilters;
  onChange: (v: CharacterFilters) => void;
}> = ({ value, onChange }) => {
  return (
    <form className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full">
      <div className="flex flex-col">
        <label className="mb-2 text-xs font-semibold text-primary-light uppercase tracking-wide">
          Nombre
        </label>
        <input
          type="text"
          placeholder="Ej. Rick"
          value={value.name ?? ""}
          onChange={(e) => onChange({ ...value, name: e.target.value })}
          className="w-full px-4 py-3 rounded-lg border border-surface-border bg-surface-inset text-slate-200 placeholder-slate-500 focus:ring-2 focus:ring-primary/50 focus:border-primary focus:outline-none transition"
        />
      </div>

      <div className="flex flex-col">
        <label className="mb-2 text-xs font-semibold text-primary-light uppercase tracking-wide">
          Estado
        </label>
        <select
          value={value.status ?? ""}
          onChange={(e) =>
            onChange({ ...value, status: (e.target.value as any) || undefined })
          }
          className="w-full px-4 py-3 rounded-lg border border-surface-border bg-surface-inset text-slate-200 focus:ring-2 focus:ring-secondary/50 focus:border-secondary focus:outline-none transition"
        >
          <option value="">Todos</option>
          <option value="alive">Vivo</option>
          <option value="dead">Muerto</option>
          <option value="unknown">Desconocido</option>
        </select>
      </div>

      <div className="flex flex-col">
        <label className="mb-2 text-xs font-semibold text-primary-light uppercase tracking-wide">
          Especie
        </label>
        <input
          type="text"
          placeholder="Ej. Humano"
          value={value.species ?? ""}
          onChange={(e) => onChange({ ...value, species: e.target.value })}
          className="w-full px-4 py-3 rounded-lg border border-surface-border bg-surface-inset text-slate-200 placeholder-slate-500 focus:ring-2 focus:ring-accent/50 focus:border-accent focus:outline-none transition"
        />
      </div>
    </form>
  );
};

export default Filters;
