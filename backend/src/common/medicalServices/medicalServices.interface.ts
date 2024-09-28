import mongoose, { Schema } from 'mongoose';

export interface IMedicalServices {
    name: string;
    img: string;

    tranform(): IReponseMedicalServices;
}

export interface IReponseMedicalServices {
    id: string;
    name: string;
    img: string;
}

const MedicalServicesSchema = new Schema<IMedicalServices>({
    name: { type: String },
    img: { type: String },
});

MedicalServicesSchema.method({
    transform(): IReponseMedicalServices {
        return {
            id: this._id.toHexString(),
            name: this.name,
            img: this.img,
        };
    },
});

export const MedicalServicesModel = mongoose.model<IMedicalServices>('AllService', MedicalServicesSchema);
