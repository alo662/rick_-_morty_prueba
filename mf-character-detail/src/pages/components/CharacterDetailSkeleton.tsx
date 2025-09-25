import React from "react";
import "../../index.css"

const CharacterDetailSkeleton: React.FC = () => {
  return (
    <section className="space-y-6 animate-pulse">
      <div className="h-8 w-48 bg-gray-200 rounded"></div>

      <div className="grid md:grid-cols-[240px,1fr] gap-6">

        <div className="w-60 h-60 bg-gray-200 rounded-xl shadow"></div>

        <div className="space-y-3">
          <div className="h-4 w-32 bg-gray-200 rounded"></div>
          <div className="h-4 w-28 bg-gray-200 rounded"></div>
          <div className="h-4 w-40 bg-gray-200 rounded"></div>
          <div className="h-4 w-24 bg-gray-200 rounded"></div>
          <div className="h-4 w-36 bg-gray-200 rounded"></div>
          <div className="h-8 w-32 bg-gray-200 rounded mt-4"></div>
        </div>
      </div>

      <div className="h-6 w-40 bg-gray-200 rounded"></div>


      <div className="grid gap-3 grid-cols-[repeat(auto-fill,minmax(220px,1fr))]">
        {Array.from({ length: 4 }).map((_, i) => (
          <div
            key={i}
            className="border rounded-lg p-3 shadow-sm space-y-2 bg-white"
          >
            <div className="h-4 w-3/4 bg-gray-200 rounded"></div>
            <div className="h-3 w-1/2 bg-gray-200 rounded"></div>
            <div className="h-3 w-2/3 bg-gray-200 rounded"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CharacterDetailSkeleton;
