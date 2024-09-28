import { APIError } from '@common/error/api.error';
import { UserService } from '@common/user/user.service';
import { statusCode } from '@config/errors';
import { Request, Response, NextFunction } from 'express';

export class UserController {
    public static getAllService = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const data = await UserService.getAllService();

            if (data) {
                res.sendJson({
                    data: data,
                });
                return;
            }

            next(
                new APIError({
                    message: 'Service invalid',
                    status: statusCode.AUTH_ACCOUNT_BLOCKED,
                    errorCode: statusCode.AUTH_ACCOUNT_BLOCKED,
                }),
            );
        } catch (err) {
            next(err);
        }
    };
}
