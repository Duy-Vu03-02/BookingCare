import express from 'express';
import { MedicalScheduleController } from './medical-service.controller';

const router = express.Router();

router.get('/get-all-medical-service', MedicalScheduleController.getAllMedicalService);

export default router;
