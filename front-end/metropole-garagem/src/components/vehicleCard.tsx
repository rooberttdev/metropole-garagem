// src/components/VehicleCard.tsx
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

interface Vehicle {
  id: number;
  placa: string;
  modelo: string;
  cor: string;
  customizacoes: string;
  proprietario: string;
}

const VehicleCard: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [vehicle, setVehicle] = useState<Vehicle | null>(null);
  const navigate = useNavigate(); 

  useEffect(() => {
    fetch(`/api/vehicles/${id}`)
      .then((response) => response.json())
      .then((data) => setVehicle(data))
      .catch((error) => console.error('Error fetching vehicle details:', error));
  }, [id]);

  if (!vehicle) {
    return <div className="text-center mt-4">Loading...</div>;
  }

  const handleSpawn = () => {
    console.log(`Spawn vehicle with plate: ${vehicle.placa}`);
  };

  const handleBack = () => {
    navigate('/'); 
  };

  return (
    <div className="container mx-auto p-4 font-inter">
      <h1 className="text-center text-5xl font-extrabold mb-4 text-logo">{vehicle.modelo}</h1>
      <div className="bg-logo text-black shadow-md rounded-lg p-4">
        <p><strong>Placa:</strong> {vehicle.placa}</p>
        <p><strong>Cor:</strong> {vehicle.cor}</p>
        <p><strong>Customizações:</strong> {vehicle.customizacoes}</p>
        <p><strong>Proprietário:</strong> {vehicle.proprietario}</p>
        <button
          className="mt-4  bg-logo6 text-black px-4 py-2 rounded  hover:bg-white"
          onClick={handleSpawn}
        >
          Spawnar Veículo
        </button>
        <button
          className="mt-4 ml-4 bg-logo6 text-black px-4 py-2 rounded hover:bg-white"
          onClick={handleBack}
        >
          Voltar para Lista
        </button>
      </div>
    </div>
  );
};

export default VehicleCard;
