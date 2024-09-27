import { DoctorRank } from "@common/constant/constant.rank";
import { values } from "lodash";
import mongoose, {Schema} from "mongoose";

export interface IDocter {
    name: string,
    dob: Date,
    address : string,
    phone: string,
    email: string,
    password: string,

    rank : string,
    examinationAddress: string,
    hospital: string,
    specialty: string,
    description: [string],
    educationProcess?: [string],
    workProcess?: [string],
    prize?: [string],
    scientificReport?: [string],
};

const DoctorSchema = new Schema<IDocter>({
    name: {type: String},
    dob: {type: Date},
    address : {type: String},
    phone: {type: String},
    email: {type:String},
    password: {type:String},

    rank : {type: String, enum : values(DoctorRank)},
    examinationAddress: {type: String},
    hospital: {type: String},
    specialty: { type: String, required: true },
    description: { type: [String], default: [] },
    educationProcess: { type: [String], default: [] },
    workProcess: { type: [String], default: [] },
    prize: { type: [String], default: [] },
    scientificReport: { type: [String], default: [] },
});

export const DoctorModel = mongoose.model<IDocter>("Doctor", DoctorSchema);