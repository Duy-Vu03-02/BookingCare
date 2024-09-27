import { MONGODB_URL } from './../config/config.environment';
import mongoose, { mongo } from "mongoose";

export class DatabaseAdapter{
    public static async connection(): Promise<void> {
        try{
            await mongoose.connect(MONGODB_URL, {});
            console.log("ConnectDB :: Sucess");
        }
        catch(err){
            console.error(err);
        }
    }

    public static async disconnect(): Promise<void>{
        try{
            await mongoose.disconnect();
        }
        catch(err){
            console.error(err);
        }
    }
}