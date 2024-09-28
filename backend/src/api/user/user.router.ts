import express from 'express';
import { UserController } from './user.controller';

const router = express.Router();

router.get('/medical-services', UserController.getAllService);

export default router;
