// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import VehicleList from './components/vehicleList';
import VehicleDetail from './components/vehicleCard';
import backgroundImg from './assets/background.png'; // Importe a imagem

const App: React.FC = () => {
  return (
    <Router>
      <div
        style={{
          backgroundImage: `url(${backgroundImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '100vh',
        }}
      >
        <Routes>
          <Route path="/" element={<VehicleList />} />
          <Route path="/vehicles/:id" element={<VehicleDetail />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
