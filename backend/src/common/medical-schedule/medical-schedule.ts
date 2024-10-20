import mongoose, { Schema, model } from 'mongoose';
import { ISchedule, IResponseSchedule } from './medical-schedule.interface';

export interface IResponseMedicalSchedule {
    id: string;
    doctor_id: string;
    schedule: IResponseSchedule;
}

export interface IMedicalSchedule extends Document {
    _id: { type: Schema.Types.ObjectId; ref: 'User' };
    doctor_id: { type: Schema.Types.ObjectId; ref: 'User' };
    schedule: ISchedule;

    transform(): IResponseMedicalSchedule;
}

const MedicalScheduleSchema: Schema<IMedicalSchedule> = new Schema(
    {
        doctor_id: { type: Schema.Types.ObjectId, ref: 'Doctor' },
        schedule: {
            '07:00': [
                {
                    user_id: { type: Schema.Types.ObjectId, ref: 'User' },
                },
            ],
            '07:30': [
                {
                    user_id: { type: Schema.Types.ObjectId, ref: 'User' },
                },
            ],
            '08:00': [
                {
                    user_id: { type: Schema.Types.ObjectId, ref: 'User' },
                },
            ],
            '08:30': [
                {
                    user_id: { type: Schema.Types.ObjectId, ref: 'User' },
                },
            ],
            '09:00': [
                {
                    user_id: { type: Schema.Types.ObjectId, ref: 'User' },
                },
            ],
            '09:30': [
                {
                    user_id: { type: Schema.Types.ObjectId, ref: 'User' },
                },
            ],
            '10:00': [
                {
                    user_id: { type: Schema.Types.ObjectId, ref: 'User' },
                },
            ],
            '10:30': [
                {
                    user_id: { type: Schema.Types.ObjectId, ref: 'User' },
                },
            ],
            '11:00': [
                {
                    user_id: { type: Schema.Types.ObjectId, ref: 'User' },
                },
            ],
            '11:30': [
                {
                    user_id: { type: Schema.Types.ObjectId, ref: 'User' },
                },
            ],
            '12:00': [
                {
                    user_id: { type: Schema.Types.ObjectId, ref: 'User' },
                },
            ],
            '13:30': [
                {
                    user_id: { type: Schema.Types.ObjectId, ref: 'User' },
                },
            ],
            '14:00': [
                {
                    user_id: { type: Schema.Types.ObjectId, ref: 'User' },
                },
            ],
            '14:30': [
                {
                    user_id: { type: Schema.Types.ObjectId, ref: 'User' },
                },
            ],
            '15:00': [
                {
                    user_id: { type: Schema.Types.ObjectId, ref: 'User' },
                },
            ],
            '15:30': [
                {
                    user_id: { type: Schema.Types.ObjectId, ref: 'User' },
                },
            ],
            '16:00': [
                {
                    user_id: { type: Schema.Types.ObjectId, ref: 'User' },
                },
            ],
            '16:30': [
                {
                    user_id: { type: Schema.Types.ObjectId, ref: 'User' },
                },
            ],
            '17:00': [
                {
                    user_id: { type: Schema.Types.ObjectId, ref: 'User' },
                },
            ],
            '17:30': [
                {
                    user_id: { type: Schema.Types.ObjectId, ref: 'User' },
                },
            ],
            '18:00': [
                {
                    user_id: { type: Schema.Types.ObjectId, ref: 'User' },
                },
            ],
            '18:30': [
                {
                    user_id: { type: Schema.Types.ObjectId, ref: 'User' },
                },
            ],
            '19:00': [
                {
                    user_id: { type: Schema.Types.ObjectId, ref: 'User' },
                },
            ],
            '19:30': [
                {
                    user_id: { type: Schema.Types.ObjectId, ref: 'User' },
                },
            ],
            '20:00': [
                {
                    user_id: { type: Schema.Types.ObjectId, ref: 'User' },
                },
            ],
            '20:30': [
                {
                    user_id: { type: Schema.Types.ObjectId, ref: 'User' },
                },
            ],
            '21:00': [
                {
                    user_id: { type: Schema.Types.ObjectId, ref: 'User' },
                },
            ],
            '21:30': [
                {
                    user_id: { type: Schema.Types.ObjectId, ref: 'User' },
                },
            ],
        },
    },
    {
        timestamps: true,
    },
);

MedicalScheduleSchema.method({
    transform(): IResponseMedicalSchedule {
        return {
            id: this._id.toHexString(),
            doctor_id: this.doctor_id.toHexString(),
            schedule: {
                '07:00': [
                    {
                        user_id: this.user_id.toHexString(),
                    },
                ],
                '07:30': [
                    {
                        user_id: this.user_id.toHexString(),
                    },
                ],
                '08:00': [
                    {
                        user_id: this.user_id.toHexString(),
                    },
                ],
                '08:30': [
                    {
                        user_id: this.user_id.toHexString(),
                    },
                ],
                '09:00': [
                    {
                        user_id: this.user_id.toHexString(),
                    },
                ],
                '09:30': [
                    {
                        user_id: this.user_id.toHexString(),
                    },
                ],
                '10:00': [
                    {
                        user_id: this.user_id.toHexString(),
                    },
                ],
                '10:30': [
                    {
                        user_id: this.user_id.toHexString(),
                    },
                ],
                '11:00': [
                    {
                        user_id: this.user_id.toHexString(),
                    },
                ],
                '11:30': [
                    {
                        user_id: this.user_id.toHexString(),
                    },
                ],
                '12:00': [
                    {
                        user_id: this.user_id.toHexString(),
                    },
                ],
                '13:30': [
                    {
                        user_id: this.user_id.toHexString(),
                    },
                ],
                '14:00': [
                    {
                        user_id: this.user_id.toHexString(),
                    },
                ],
                '14:30': [
                    {
                        user_id: this.user_id.toHexString(),
                    },
                ],
                '15:00': [
                    {
                        user_id: this.user_id.toHexString(),
                    },
                ],
                '15:30': [
                    {
                        user_id: this.user_id.toHexString(),
                    },
                ],
                '16:00': [
                    {
                        user_id: this.user_id.toHexString(),
                    },
                ],
                '16:30': [
                    {
                        user_id: this.user_id.toHexString(),
                    },
                ],
                '17:00': [
                    {
                        user_id: this.user_id.toHexString(),
                    },
                ],
                '17:30': [
                    {
                        user_id: this.user_id.toHexString(),
                    },
                ],
                '18:00': [
                    {
                        user_id: this.user_id.toHexString(),
                    },
                ],
                '18:30': [
                    {
                        user_id: this.user_id.toHexString(),
                    },
                ],
                '19:00': [
                    {
                        user_id: this.user_id.toHexString(),
                    },
                ],
                '19:30': [
                    {
                        user_id: this.user_id.toHexString(),
                    },
                ],
                '20:00': [
                    {
                        user_id: this.user_id.toHexString(),
                    },
                ],
                '20:30': [
                    {
                        user_id: this.user_id.toHexString(),
                    },
                ],
                '21:00': [
                    {
                        user_id: this.user_id.toHexString(),
                    },
                ],
                '21:30': [
                    {
                        user_id: this.user_id.toHexString(),
                    },
                ],
            },
        };
    },
});

export const MedicalScheduleModel = mongoose.model<IMedicalSchedule>('MedicalSchedule', MedicalScheduleSchema);
