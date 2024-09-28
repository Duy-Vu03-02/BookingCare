import express, { Request, Response, NextFunction } from 'express';
import doctorRouter from './doctor/doctor.router';
import userRouter from './user/user.router';

const router = express.Router();

router.get('/test', async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    res.status(200).json({ mess: 'OK!' }).end();
});

router.use('/doctor', doctorRouter);
router.use('/user', userRouter);

export default router;
