import { IReponseMedicalServices, MedicalServicesModel } from '@common/medicalServices/medicalServices.interface';

export class UserService {
    public static getAllService = async (): Promise<IReponseMedicalServices[]> => {
        try {
            const listService = await MedicalServicesModel.find();

            if (listService) {
                return listService.map((item) => item.tranform());
            }
            return [];
        } catch (err) {
            throw err;
        }
    };
}
