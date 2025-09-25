import React from 'react';
import { createRoot } from 'react-dom/client';
import CharactersApp from './remote';
import './index.css';

const root = createRoot(document.getElementById('root')!);
root.render(<CharactersApp />);
