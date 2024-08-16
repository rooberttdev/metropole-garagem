import { VehicleModel } from '../models/vehicleModel';


export class VehicleService {
  async getAllVehicles() {
    return await VehicleModel.findAll();
  }

  async getVehicleById(id: number) {
    return await VehicleModel.findByPk(id);
  }

  async addVehicle(vehicle: { licensePlate: string; model: string; color: string; owner: string }) {
    return await VehicleModel.create(vehicle);
  }

  async updateVehicle(id: number, updates: { licensePlate?: string; model?: string; color?: string; owner?: string }) {
    const vehicle = await VehicleModel.findByPk(id);
    if (vehicle) {
      return await vehicle.update(updates);
    }
    throw new Error('Vehicle not found');
  }

  async deleteVehicle(id: number) {
    const result = await VehicleModel.destroy({
      where: { id },
    });
    return result > 0;
  }
}
