import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter, Routes, Route } from 'react-router'
import './index.css'
import Home from '@pages/Home'
import '@fontsource-variable/roboto-mono';
import '@fontsource-variable/nunito-sans';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </HashRouter>
  </StrictMode>
)