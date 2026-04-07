import React, { Suspense, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SideNav from "./components/SideNav";
import Navbar from "./components/Navbar";
import Home from "./components/Home";

const CharactersApp = React.lazy(() => import("characters/CharactersApp"));
const CharacterDetailApp = React.lazy(() => import("charDetail/CharacterDetailApp"));

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <Router>
      <div className="h-screen bg-surface flex text-slate-200">
        <SideNav open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

        <div
          className={`
            flex-1 flex flex-col
            transition-all duration-300 ease-in-out
          `}
        >
          <Navbar onToggleSidebar={() => setSidebarOpen(!sidebarOpen)} />

          <main className="flex-1 p-6 overflow-auto">
            <Suspense
              fallback={
                <div className="flex justify-center items-center h-full">
                  <div className="animate-spin rounded-full h-12 w-12 border-4 border-primary border-t-transparent"></div>
                </div>
              }
            >
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/characters" element={<CharactersApp />} />
                <Route path="/character/:id" element={<CharacterDetailApp />} />
              </Routes>
            </Suspense>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
