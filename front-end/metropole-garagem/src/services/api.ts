// src/services/api.ts
import axios from 'axios';

const API_URL = 'http://localhost:3000/vehicles';

export const getVehicles = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar veículos', error);
    throw error;
  }
};

export const spawnVehicle = async (placa: string) => {
  try {
    const response = await axios.post(`${API_URL}/spawn/${placa}`);
    return response.data;
  } catch (error) {
    console.error('Erro ao spawnar veículo', error);
    throw error;
  }
};
