import mongoose, { Schema } from 'mongoose';

export interface ISchedule {
    dayOfWeek: string;
    day: Date;
}

export interface IMedicalSchedule extends Document {
    _id: Schema.Types.ObjectId;
    hospital_id: Schema.Types.ObjectId;
    doctor_id: Schema.Types.ObjectId;
    booking;
}
