import { TimeConstant } from '@common/constant/constant.time';
import { Schema } from 'mongoose';

export interface IUserBooking {
    medical_schedule_id: string;
    time_booking: TimeConstant;
    user_id: string;
    phone: string;
    email?: string;
}

export interface IRegisterBooking {
    user_id: string;
    booking_id: string;
}

export interface IResponseSchedule {
    '07:00': [
        {
            user_id: string;
        },
    ];
    '07:30': [
        {
            user_id: string;
        },
    ];
    '08:00': [
        {
            user_id: string;
        },
    ];
    '08:30': [
        {
            user_id: string;
        },
    ];
    '09:00': [
        {
            user_id: string;
        },
    ];
    '09:30': [
        {
            user_id: string;
        },
    ];
    '10:00': [
        {
            user_id: string;
        },
    ];
    '10:30': [
        {
            user_id: string;
        },
    ];
    '11:00': [
        {
            user_id: string;
        },
    ];
    '11:30': [
        {
            user_id: string;
        },
    ];
    '12:00': [
        {
            user_id: string;
        },
    ];
    '13:30': [
        {
            user_id: string;
        },
    ];
    '14:00': [
        {
            user_id: string;
        },
    ];
    '14:30': [
        {
            user_id: string;
        },
    ];
    '15:00': [
        {
            user_id: string;
        },
    ];
    '15:30': [
        {
            user_id: string;
        },
    ];
    '16:00': [
        {
            user_id: string;
        },
    ];
    '16:30': [
        {
            user_id: string;
        },
    ];
    '17:00': [
        {
            user_id: string;
        },
    ];
    '17:30': [
        {
            user_id: string;
        },
    ];
    '18:00': [
        {
            user_id: string;
        },
    ];
    '18:30': [
        {
            user_id: string;
        },
    ];
    '19:00': [
        {
            user_id: string;
        },
    ];
    '19:30': [
        {
            user_id: string;
        },
    ];
    '20:00': [
        {
            user_id: string;
        },
    ];
    '20:30': [
        {
            user_id: string;
        },
    ];
    '21:00': [
        {
            user_id: string;
        },
    ];
    '21:30': [
        {
            user_id: string;
        },
    ];
}

export interface ISchedule {
    '07:00': [
        {
            user_id: Schema.Types.ObjectId;
        },
    ];
    '07:30': [
        {
            user_id: Schema.Types.ObjectId;
        },
    ];
    '08:00': [
        {
            user_id: Schema.Types.ObjectId;
        },
    ];
    '08:30': [
        {
            user_id: Schema.Types.ObjectId;
        },
    ];
    '09:00': [
        {
            user_id: Schema.Types.ObjectId;
        },
    ];
    '09:30': [
        {
            user_id: Schema.Types.ObjectId;
        },
    ];
    '10:00': [
        {
            user_id: Schema.Types.ObjectId;
        },
    ];
    '10:30': [
        {
            user_id: Schema.Types.ObjectId;
        },
    ];
    '11:00': [
        {
            user_id: Schema.Types.ObjectId;
        },
    ];
    '11:30': [
        {
            user_id: Schema.Types.ObjectId;
        },
    ];
    '12:00': [
        {
            user_id: Schema.Types.ObjectId;
        },
    ];
    '13:30': [
        {
            user_id: Schema.Types.ObjectId;
        },
    ];
    '14:00': [
        {
            user_id: Schema.Types.ObjectId;
        },
    ];
    '14:30': [
        {
            user_id: Schema.Types.ObjectId;
        },
    ];
    '15:00': [
        {
            user_id: Schema.Types.ObjectId;
        },
    ];
    '15:30': [
        {
            user_id: Schema.Types.ObjectId;
        },
    ];
    '16:00': [
        {
            user_id: Schema.Types.ObjectId;
        },
    ];
    '16:30': [
        {
            user_id: Schema.Types.ObjectId;
        },
    ];
    '17:00': [
        {
            user_id: Schema.Types.ObjectId;
        },
    ];
    '17:30': [
        {
            user_id: Schema.Types.ObjectId;
        },
    ];
    '18:00': [
        {
            user_id: Schema.Types.ObjectId;
        },
    ];
    '18:30': [
        {
            user_id: Schema.Types.ObjectId;
        },
    ];
    '19:00': [
        {
            user_id: Schema.Types.ObjectId;
        },
    ];
    '19:30': [
        {
            user_id: Schema.Types.ObjectId;
        },
    ];
    '20:00': [
        {
            user_id: Schema.Types.ObjectId;
        },
    ];
    '20:30': [
        {
            user_id: Schema.Types.ObjectId;
        },
    ];
    '21:00': [
        {
            user_id: Schema.Types.ObjectId;
        },
    ];
    '21:30': [
        {
            user_id: Schema.Types.ObjectId;
        },
    ];
}
