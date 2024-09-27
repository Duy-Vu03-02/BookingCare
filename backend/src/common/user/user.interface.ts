import mongoose, {Schema} from "mongoose";

export interface IUser {
    name: string,
    sex: string,
    phone: string,
    email: string,
    yob: string,
    city: string,
    district: string,
    address: string,
    reasonExamination: string,
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
    reasonExamination: { type: String, required: true },
})

export const UserModel = mongoose.model<IUser>("User", UserSchema);