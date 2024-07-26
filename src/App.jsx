import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import Collab from './pages/Collab';
import About from './pages/About';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<Error />} />
      <Route path="/collab" element={<Collab />} />
      <Route path="/catalogs" element={<Catalog />} />
      <Route path="/about" element={<About />} />

    </Routes>
  );
};
export default App;
