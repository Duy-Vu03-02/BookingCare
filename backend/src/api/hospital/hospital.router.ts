import express from 'express';
import { HospitalController } from './hospital.controller';

const router = express.Router();

router.post('/create-hospital', HospitalController.createHospital);
router.get('/all-hospital', HospitalController.getAllHosptital);
router.get('/detail-hospital', HospitalController.getDetailHospital);

export default router;
