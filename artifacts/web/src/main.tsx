import { createRoot } from 'react-dom/client';

import App from './App';

// Self-hosted fonts — Latin-only subsets keep @font-face declarations minimal,
// eliminating the Google Fonts roundtrip and reducing render-blocking CSS size.
import '@fontsource/inter/latin-400.css';
import '@fontsource/inter/latin-600.css';
import '@fontsource/inter/latin-700.css';
import '@fontsource/manrope/latin-700.css';
import '@fontsource/manrope/latin-800.css';

import './index.css';

createRoot(document.getElementById('root')!).render(<App />);
