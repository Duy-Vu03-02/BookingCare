import express, { Request, Response, NextFunction } from 'express';
import doctorRouter from './doctor/doctor.router';
import userRouter from './user/user.router';
import hospitalRouter from './hospital/hospital.router';
import medicalServiceRouter from './medical-service/medical-service.router';

const router = express.Router();

router.get('/test', async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    res.status(200).json({ mess: 'OK!' }).end();
});

router.use('/hospital', hospitalRouter);

router.use('/doctor', doctorRouter);

router.use('/user', userRouter);

router.use('/medical-service', medicalServiceRouter);

// router.use('/medical-schedule');

export default router;
