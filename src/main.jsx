import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/home';
import FundamentalOuMedio from './pages/fundamentaloumedio';
import Fundamental from './pages/fundamental';
import Medio from './pages/medio';
import Umano from './pages/medio/umano';
import Tresano from './pages/medio/tresano';
import Doisano from './pages/medio/doisano';
import Seisano from './pages/fundamental/seisano';
import Seteano from './pages/fundamental/seteano';
import Oitoano from './pages/fundamental/oitoano';
import Noveano from './pages/fundamental/noveano';
import Recebimento from './pages/recebimento';
import TabelaDasSalas from './pages/TabelaDasSalas';

console.log('Aplicação renderizada!');

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/fundamental" element={<Fundamental />} />
          <Route path="/medio" element={<Medio />} /> 
          <Route path="/fundamentaloumedio" element={<FundamentalOuMedio />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/umano" element={<Umano />} />
          <Route path="/doisano" element={<Doisano />} />
          <Route path="/tresano" element={<Tresano />} />
          <Route path="/seisano" element={<Seisano />} />
          <Route path="/seteano" element={<Seteano />} />
          <Route path="/oitoano" element={<Oitoano />} />
          <Route path="/noveano" element={<Noveano />} />
          <Route path="/recebimento" element={<Recebimento />} />
          <Route path="/TabelaDasSalas" element={<TabelaDasSalas />} />
        </Routes>
      </BrowserRouter>
  </StrictMode>,
);