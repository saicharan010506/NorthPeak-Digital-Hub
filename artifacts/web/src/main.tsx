import { createRoot } from 'react-dom/client';

import App from './App';

// Self-hosted fonts — eliminates Google Fonts network roundtrip and render-blocking CSS
import '@fontsource/inter/400.css';
import '@fontsource/inter/600.css';
import '@fontsource/inter/700.css';
import '@fontsource/manrope/700.css';
import '@fontsource/manrope/800.css';

import './index.css';

createRoot(document.getElementById('root')!).render(<App />);
