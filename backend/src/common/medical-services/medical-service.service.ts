import { APIError } from '@common/error/api.error';
import { MedicalDetailModel, MedicalServicesModel } from './medical-service';
import { IMedicalDetailId, IReponseMedicalDetial, IReponseMedicalServices } from './medical-services.interface';
import { statusCode } from '@config/errors';

export class MedicalServices {
    public static getAllMedicalService = async (): Promise<IReponseMedicalServices[]> => {
        try {
            const listMedicalService = await MedicalServicesModel.find({});
            if (listMedicalService) {
                return listMedicalService.map((item) => item.transform());
            }
            return [];
        } catch (err) {
            throw new APIError({
                message: 'Không có dịch vụ nào',
                status: statusCode.REQUEST_NOT_FOUND,
                errorCode: statusCode.REQUEST_NOT_FOUND,
            });
        }
    };

    public static getMedicalService = async (req: IMedicalDetailId): Promise<IReponseMedicalDetial[]> => {
        try {
            const { id } = req;
            if (id) {
                const medicalDetial = await MedicalDetailModel.find({ medical_service_id: id });
                if (medicalDetial) {
                    return medicalDetial.map((item) => item.transform());
                }
            }

            return [];
        } catch (err) {
            throw new APIError({
                message: 'Không có danh mục nào',
                status: statusCode.REQUEST_NOT_FOUND,
                errorCode: statusCode.REQUEST_NOT_FOUND,
            });
        }
    };
}
