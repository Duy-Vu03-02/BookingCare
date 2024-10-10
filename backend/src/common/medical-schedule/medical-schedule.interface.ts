import { TimeConstant } from '@common/constant/constant.time';
import { values } from 'lodash';
import mongoose, { Schema } from 'mongoose';

export interface IScheduleUserBooking {
    doctor_id: string;
}

export interface IRegisterBooking {
    doctor_id: string;
    schedule_booking_id: string;
    reasonExamination: string;

    user_id?: string;
    time?: TimeConstant;
}

export interface ISchedule {
    user_id: Schema.Types.ObjectId;
    time: TimeConstant;
}

export interface IMedicalSchedule extends Document {
    _id: Schema.Types.ObjectId;
    doctor_id: Schema.Types.ObjectId;
    date: Date;
    schedule: [ISchedule];

    transform(): IReponseMedicalSchedule;
}

export interface IReponseMedicalSchedule {
    id: string;
    doctor_id: string;
    date: Date;
    schedule: [
        {
            user_id: string;
            time: string;
        },
    ];
}

const MedicalScheduleSchema = new Schema<IMedicalSchedule>({
    doctor_id: { type: Schema.Types.ObjectId, ref: 'doctor' },
    date: { type: Date, default: new Date() },
    schedule: [
        {
            user_id: { type: Schema.Types.ObjectId, ref: 'User' },
            time: { type: String, enum: values(TimeConstant) },
        },
    ],
});

MedicalScheduleSchema.method({
    transform(): IReponseMedicalSchedule {
        return {
            id: this._id.toHexString(),
            doctor_id: this.doctor_id,
            date: this.date,
            schedule: this.schedule,
        };
    },
});

export const MedicalScheduleModel = mongoose.model<IMedicalSchedule>('MedicalSchedule', MedicalScheduleSchema);
