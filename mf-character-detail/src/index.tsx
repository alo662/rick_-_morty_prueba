import React from "react";
import { createRoot } from "react-dom/client";
import CharacterDetailApp from "./remote";
import "./index.css";

const root = createRoot(document.getElementById("root")!);
root.render(<CharacterDetailApp />);
