import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

interface Vehicle {
  id: number;
  placa: string;
  modelo: string;
  cor: string;
  customizacoes: string;
  proprietario: string;
}

const VehicleList: React.FC = () => {
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);

  useEffect(() => {
    fetch('/api/vehicles')
      .then((response) => response.json())
      .then((data) => setVehicles(data))
      .catch((error) => console.error('Error fetching vehicles:', error));
  }, []);

  return (
    <div className="container mx-auto p-4  font-inter">
      <h1 className="text-center text-4xl uppercase font-extrabold mb-4 text-logo">Lista de Veículos</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {vehicles.map((vehicle) => (
          <div key={vehicle.id} className="bg-logo text-black shadow-md rounded-lg p-4">
            <h2 className="text-2xl font-bold uppercase text-center">{vehicle.modelo}</h2>
            <p><strong>Placa:</strong> {vehicle.placa}</p>
            <p><strong>Cor:</strong> {vehicle.cor}</p>
            <p><strong>Customizações:</strong> {vehicle.customizacoes}</p>
            <p><strong>Proprietário:</strong> {vehicle.proprietario}</p>
            <Link to={`/vehicles/${vehicle.id}`} className="block mt-4 text-center bg-logo6 text-black px-4 py-2 rounded hover:bg-white">
              Ver detalhes
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VehicleList;
