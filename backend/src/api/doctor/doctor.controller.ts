import express, { Request, Response, NextFunction } from 'express';
import { DoctorService } from '@common/doctor/doctor.service';
import { IIdDoctor } from '@common/doctor/doctor.interface';
import { APIError } from '@common/error/api.error';
import { statusCode } from '@config/errors';

export class DoctorController {
    public static getFeaturedDoctor = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const doctors = await DoctorService.getFeaturedDoctor();
            res.sendJson({
                data: doctors,
            });
            return;
        } catch (err) {
            next(err);
        }
    };

    public static getDetialDoctor = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const doctor = await DoctorService.getDetialDoctor(req.body as IIdDoctor);

            if (doctor) {
                res.sendJson({
                    data: doctor,
                });
                return;
            }

            next(
                new APIError({
                    message: 'Không tồn tại bác sĩ',
                    status: statusCode.REQUEST_NOT_FOUND,
                    errorCode: statusCode.REQUEST_NOT_FOUND,
                }),
            );
        } catch (err) {
            next(err);
        }
    };
}
