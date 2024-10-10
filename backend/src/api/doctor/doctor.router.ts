import express from 'express';
import { DoctorController } from './doctor.controller';

const router = express.Router();

router.post('/create-doctor', DoctorController.createDoctor);
router.get('/feature-doctor', DoctorController.getFeaturedDoctor);
router.get('/detail-doctor', DoctorController.getDetialDoctor);

export default router;
