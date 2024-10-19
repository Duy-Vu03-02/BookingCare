import { MedicalServicesModel } from '@common/medical-services/medical-service';
import { IReponseMedicalServices } from '@common/medical-services/medical-services.interface';
import { APIError } from '@common/error/api.error';
import { statusCode } from '@config/errors';
import { IUserJobEmail, IUserLogin } from './user.interface';
import { QueueService } from '@common/queue/queue.service';
import { JobContant } from '@common/constant/constant.job';

export class UserService {
    public static getAllService = async (): Promise<IReponseMedicalServices[]> => {
        try {
            const listService = await MedicalServicesModel.find();

            if (listService) {
                return listService.map((item) => item.transform());
            }
            return [];
        } catch (err) {
            throw err;
        }
    };

    public static userSignUp = async (req: IUserLogin): Promise<boolean> => {
        const { phone, email } = req;

        if (!phone && !email) {
            throw new APIError({
                message: 'Không thể xác thực',
                errorCode: statusCode.REQUEST_NOT_FOUND,
                status: statusCode.REQUEST_FORBIDDEN,
            });
        }

        if (email) {
            // const queue = await QueueService.getQueue(JobContant.SEND_MAIL_LOGIN);

            // const opt = Array.from({ length: 4 })
            //     .map((_, index) => Math.floor(Math.random() * (index + 9)))
            //     .join('');
            // console.log(opt);

            // await queue.add({ email, opt } as IUserJobEmail);
            return true;
        }

        if (phone) {
            return false;
        }

        return false;
    };
}
