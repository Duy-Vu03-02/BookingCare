import { APIError } from '@common/error/api.error';
import { MedicalServices } from '@common/medical-services/medical-service.service';
import { IMedicalDetailId } from '@common/medical-services/medical-services.interface';
import { statusCode } from '@config/errors';
import { NextFunction, Response, Request } from 'express';

export class MedicalScheduleController {
    public static getAllMedicalService = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const data = await MedicalServices.getAllMedicalService();
            if (data) {
                res.sendJson({
                    data: data,
                });
                return;
            }

            next(
                new APIError({
                    message: 'Không có dịch vụ nào',
                    status: statusCode.REQUEST_FORBIDDEN,
                    errorCode: statusCode.REQUEST_FORBIDDEN,
                }),
            );
        } catch (err) {
            next(err);
        }
    };

    public static getMedicalService = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const data = await MedicalServices.getMedicalService(req.body as IMedicalDetailId);
            if (data) {
                res.sendJson({
                    data: data,
                });
                return;
            }

            next(
                new APIError({
                    message: 'Không có danh mục nào',
                    status: statusCode.REQUEST_NOT_FOUND,
                    errorCode: statusCode.REQUEST_NOT_FOUND,
                }),
            );
        } catch (err) {
            next(err);
        }
    };
}
