import { Request, Response } from 'express';
import { VehicleService } from '../services/vehicleService';

const vehicleService = new VehicleService();

export const getAllVehicles = async (req: Request, res: Response) => {
  try {
    const vehicles = await vehicleService.getAllVehicles();
    res.json(vehicles);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'Erro desconhecido' });
    }
  }
};

export const getVehicleById = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id, 10);
  try {
    const vehicle = await vehicleService.getVehicleById(id);
    res.json(vehicle);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'Erro desconhecido' });
    }
  }
};

export const addVehicle = async (req: Request, res: Response) => {
  try {
    const vehicle = await vehicleService.addVehicle(req.body);
    res.status(201).json(vehicle);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'Erro desconhecido' });
    }
  }
};

export const updateVehicle = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id, 10);
  try {
    const vehicle = await vehicleService.updateVehicle(id, req.body);
    res.json(vehicle);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'Erro desconhecido' });
    }
  }
};

export const deleteVehicle = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id, 10);
  try {
    const success = await vehicleService.deleteVehicle(id);
    res.json({ success });
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'Erro desconhecido' });
    }
  }
};
