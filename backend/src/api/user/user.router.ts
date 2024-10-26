import express from 'express';
import { UserController } from './user.controller';
import { validate } from 'express-validation';
import { getAllBooking, userSignup } from '@api/auth/auth.user';

const router = express.Router();

router.get('/medical-services', UserController.getAllService);

router.post('/sign-up', validate(userSignup, { context: true }), UserController.userSignUp);

router.get('/get-all-booking', validate(getAllBooking, { context: true }), UserController.getAllBooking);

export default router;
