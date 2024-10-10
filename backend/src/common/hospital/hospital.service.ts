import { APIError } from '@common/error/api.error';
import { HospitalModel, IHospital, IIDHospital, IResponseBasicHospital, IResponseHospital } from './hospital.interface';
import { statusCode } from '@config/errors';

export class HospitalService {
    public static createHospital = async (req: IHospital): Promise<IResponseHospital> => {
        try {
            const hospital = await HospitalModel.create(req);

            if (hospital) {
                return hospital.transform();
            }

            throw new APIError({
                message: 'Không thể tạo bênh viện',
                status: statusCode.REQUEST_FORBIDDEN,
                errorCode: statusCode.REQUEST_FORBIDDEN,
            });
        } catch (err) {
            throw err;
        }
    };

    public static getAllHosptital = async (): Promise<IResponseBasicHospital[]> => {
        try {
            const hospitals = await HospitalModel.find();
            if (hospitals) {
                return hospitals.map((item) => item.transformBasic());
            }

            return [];
        } catch (err) {
            throw err;
        }
    };

    public static getDetailHospital = async (data: IIDHospital): Promise<IResponseHospital> => {
        try {
            const hospital = await HospitalModel.findById(data.id);
            console.log(data);
            if (hospital) {
                return hospital.transform();
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
