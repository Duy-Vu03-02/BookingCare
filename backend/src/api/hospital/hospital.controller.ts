import { APIError } from '@common/error/api.error';
import { IIDHospital } from '@common/hospital/hospital.interface';
import { IHospital } from '@common/hospital/hospital';
import { HospitalService } from '@common/hospital/hospital.service';
import { statusCode } from '@config/errors';
import express, { NextFunction, Request, Response } from 'express';

export class HospitalController {
    public static createHospital = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const hospital = await HospitalService.createHospital(req.body as IHospital);

            if (hospital) {
                res.sendJson({
                    data: hospital,
                });
                return;
            }

            throw new APIError({
                message: 'Không thể tạo bệnh viện',
                status: statusCode.REQUEST_FORBIDDEN,
                errorCode: statusCode.REQUEST_FORBIDDEN,
            });
        } catch (err) {
            throw err;
        }
    };

    public static getAllHosptital = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const hospitals = await HospitalService.getAllHosptital();

            if (hospitals) {
                res.sendJson({
                    data: hospitals,
                });
                return;
            }

            next(
                new APIError({
                    message: 'Không có bệnh viện nào',
                    status: statusCode.AUTH_ACCOUNT_BLOCKED,
                    errorCode: statusCode.AUTH_ACCOUNT_BLOCKED,
                }),
            );
        } catch (err) {
            next(err);
        }
    };

    public static getDetailHospital = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const hospital = await HospitalService.getDetailHospital(req.query as unknown as IIDHospital);

            if (hospital) {
                res.sendJson({
                    data: hospital,
                });
                return;
            }

            next(
                new APIError({
                    message: 'Không tồn tại bệnh viện',
                    status: statusCode.REQUEST_NOT_FOUND,
                    errorCode: statusCode.REQUEST_NOT_FOUND,
                }),
            );
        } catch (err) {
            next(err);
        }
    };
}
