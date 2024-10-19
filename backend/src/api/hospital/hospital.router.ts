import express from 'express';
import { HospitalController } from './hospital.controller';
import { validate } from 'express-validation';
import { getHospital, createHospital } from '@api/auth/auth.hospital';

const router = express.Router();

router.post('/create-hospital', validate(createHospital, { context: true }), HospitalController.createHospital);

router.get('/all-hospital', HospitalController.getAllHosptital);

router.get('/detail-hospital', validate(getHospital, { context: true }), HospitalController.getDetailHospital);

export default router;
