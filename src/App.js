import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

// componentes://
import PaginaGaleria from './pages/PaginaGaleria';
import PaginaTabla from './pages/PaginaTabla';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PaginaGaleria />} />
        <Route path="/tabla" element={<PaginaTabla />} />
      </Routes> 
    </BrowserRouter>
  );
}

export default App;