import React from "react";
import "../../index.css"

const CharacterDetailSkeleton: React.FC = () => {
  return (
    <section className="space-y-6 animate-pulse">
      <div className="h-8 w-48 bg-slate-700 rounded"></div>

      <div className="grid md:grid-cols-[240px,1fr] gap-6">

        <div className="w-60 h-60 bg-slate-700 rounded-xl shadow"></div>

        <div className="space-y-3">
          <div className="h-4 w-32 bg-slate-700 rounded"></div>
          <div className="h-4 w-28 bg-slate-700 rounded"></div>
          <div className="h-4 w-40 bg-slate-700 rounded"></div>
          <div className="h-4 w-24 bg-slate-700 rounded"></div>
          <div className="h-4 w-36 bg-slate-700 rounded"></div>
          <div className="h-8 w-32 bg-slate-700 rounded mt-4"></div>
        </div>
      </div>

      <div className="h-6 w-40 bg-slate-700 rounded"></div>


      <div className="grid gap-3 grid-cols-[repeat(auto-fill,minmax(220px,1fr))]">
        {Array.from({ length: 4 }).map((_, i) => (
          <div
            key={i}
            className="border border-surface-border rounded-lg p-3 shadow-sm space-y-2 bg-surface-raised"
          >
            <div className="h-4 w-3/4 bg-slate-700 rounded"></div>
            <div className="h-3 w-1/2 bg-slate-700 rounded"></div>
            <div className="h-3 w-2/3 bg-slate-700 rounded"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CharacterDetailSkeleton;
