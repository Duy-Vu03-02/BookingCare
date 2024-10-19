import { APIError } from '@common/error/api.error';
import { IUserLogin } from '@common/user/user.interface';
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

    public static userSignUp = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const check = await UserService.userSignUp(req.body as IUserLogin);
            if (check) {
                res.sendJson({
                    data: {
                        message: 'Mã OTP đã được tạo vui lòng chờ 1 - 2 phút',
                    },
                });
                return;
            }

            next(
                new APIError({
                    message: 'Không thể tạo mã OTP',
                    errorCode: statusCode.REQUEST_FORBIDDEN,
                    status: statusCode.REQUEST_FORBIDDEN,
                }),
            );
        } catch (err) {
            next(err);
        }
    };
}
