import { Router } from 'express';
import {
  getAllVehicles,
  getVehicleById,
  addVehicle,
  updateVehicle,
  deleteVehicle,
} from '../controllers/vehicleController';

const router = Router();

router.get('/', getAllVehicles);
router.get('/:id', getVehicleById);
router.post('/', addVehicle);
router.put('/:id', updateVehicle);
router.delete('/:id', deleteVehicle);
router.post('/spawn', );

export default router;
