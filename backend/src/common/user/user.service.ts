import { MedicalServicesModel } from '@common/medical-services/medical-service';
import { IReponseMedicalServices } from '@common/medical-services/medical-services.interface';

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
}
