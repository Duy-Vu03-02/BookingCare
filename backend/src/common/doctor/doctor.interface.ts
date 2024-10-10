import { DoctorRank } from '@common/constant/constant.rank';
import { transform, values } from 'lodash';
import mongoose, { Schema } from 'mongoose';

export interface IIdDoctor {
    id: string;
}

export interface IDocter extends Document {
    _id: Schema.Types.ObjectId;
    name: string;
    dob: Date;
    address: string;
    phone: string;
    email: string;
    password: string;

    rank: string;
    examination_price: number;
    hospital_id: Schema.Types.ObjectId;
    medical_schedule_id: Schema.Types.ObjectId;
    examinationAddress: string;
    hospital: string;
    specialty: string;
    description: [string];
    education_process?: [string];
    work_process?: [string];
    prize?: [string];
    scientific_report?: [string];

    tranform(): IResponceDocter;
    tranformBasic(): IResponseBasicDoctor;
}

export interface IResponceDocter {
    id: string;
    name: string;
    dob: Date;
    address: string;
    phone: string;
    email: string;
    password: string;

    rank: string;
    examination_price: number;
    hospital_id: string;
    medical_schedule_id: string;
    examination_address: string;
    hospital: string;
    specialty: string;
    description: [string];
    education_process?: [string];
    work_process?: [string];
    prize?: [string];
    scientific_report?: [string];
}

export interface IResponseBasicDoctor {
    id: string;
    img: string;
    name: string;
    rank: string;
    specialty: string;
    hospital_id: string;
    medical_schedule_id: string;
}

const DoctorSchema = new Schema<IDocter>({
    name: { type: String },
    dob: { type: Date },
    address: { type: String },
    phone: { type: String },
    email: { type: String },
    password: { type: String },

    rank: { type: String, enum: values(DoctorRank) },
    examination_price: { type: Number, default: 0 },
    hospital_id: { type: String, ref: 'Hospital' },
    medical_schedule_id: { type: String, ref: 'MedicalAppointment' },
    examinationAddress: { type: String },
    hospital: { type: String },
    specialty: { type: String, required: true },
    description: { type: [String], default: [] },
    education_process: { type: [String], default: [] },
    work_process: { type: [String], default: [] },
    prize: { type: [String], default: [] },
    scientific_report: { type: [String], default: [] },
});

DoctorSchema.method({
    transform(): IResponceDocter {
        return {
            id: this._id.toHexString(),
            name: this.name,
            dob: this.dob,
            address: this.address,
            phone: this.phone,
            email: this.email,
            password: this.password,

            rank: this.rank,
            examination_price: this.examination_price,
            hospital_id: this.hospital_id,
            medical_schedule_id: this.medical_schedule_id.toHexString(),
            examination_address: this.examinationAddress.toHexString(),
            hospital: this.hospital,
            specialty: this.specialty,
            description: this.description,
            education_process: this.educationProcess,
            work_process: this.workProcess,
            prize: this.prize,
            scientific_report: this.scientificReport,
        };
    },
});

DoctorSchema.method({
    tranformBasic(): IResponseBasicDoctor {
        return {
            id: this._id.toHexString(),
            img: this.img,
            name: this.name,
            rank: this.rank,
            specialty: this.specialty,
            hospital_id: this.hospital_id.toHexString(),
            medical_schedule_id: this.medical_schedule_id.toHexString(),
        };
    },
});

export const DoctorModel = mongoose.model<IDocter>('Doctor', DoctorSchema);
