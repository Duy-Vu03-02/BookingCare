import { isTemplateExpression } from 'typescript';
import { DoctorModel, IIdDoctor, IResponceDocter, IResponseBasicDoctor } from './doctor.interface';
import { APIError } from '@common/error/api.error';
import { statusCode } from '@config/errors';

export class DoctorService {
    public static getFeaturedDoctor = async (): Promise<IResponseBasicDoctor[]> => {
        try {
            const doctors = await DoctorModel.find();

            if (doctors) {
                return doctors.map((item) => item.tranformBasic());
            }

            return [];
        } catch (err) {
            throw err;
        }
    };

    public static getDetialDoctor = async (data: IIdDoctor): Promise<IResponceDocter> => {
        try {
            const doctor = await DoctorModel.findById(data.id);

            if (doctor) {
                return doctor.tranform();
            }

            throw new APIError({
                message: 'Không tồn tại bác sĩ',
                status: statusCode.REQUEST_NOT_FOUND,
                errorCode: statusCode.REQUEST_NOT_FOUND,
            });
        } catch (err) {
            throw err;
        }
    };
}
