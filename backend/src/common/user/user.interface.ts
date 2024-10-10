import mongoose, { Schema } from 'mongoose';

export interface IUserDataToken {
    id: string;
}

export interface IUser {
    name: string;
    sex: string;
    phone: string;
    email: string;
    yob: string;
    city: string;
    district: string;
    address: string;
    booking: [string];
}

const UserSchema = new Schema<IUser>({
    name: { type: String, required: true },
    sex: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true },
    yob: { type: String, required: true },
    city: { type: String, required: true },
    district: { type: String, required: true },
    address: { type: String, required: true },
    booking: [{ type: String }],
});

export const UserModel = mongoose.model<IUser>('User', UserSchema);
