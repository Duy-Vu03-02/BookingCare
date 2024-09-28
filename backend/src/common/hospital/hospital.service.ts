import { APIError } from '@common/error/api.error';
import { HospitalModel, IIDHospital, IResponseBasicHospital, IResponseHospital } from './hospital.interface';
import { statusCode } from '@config/errors';

export class HospitalService {
    public static getAllHosptital = async (): Promise<IResponseBasicHospital[]> => {
        try {
            const hospitals = await HospitalModel.find();
            if (hospitals) {
                return hospitals.map((item) => item.tranformBasic());
            }

            return [];
        } catch (err) {
            throw err;
        }
    };

    public static getDetailHospital = async (data: IIDHospital): Promise<IResponseHospital> => {
        try {
            const hospital = await HospitalModel.findById(data.id);
            if (hospital) {
                return hospital.tranform();
            }

            throw new APIError({
                message: 'Không tồn tại bệnh viện',
                status: statusCode.REQUEST_NOT_FOUND,
                errorCode: statusCode.REQUEST_NOT_FOUND,
            });
        } catch (err) {
            throw err;
        }
    };
}
