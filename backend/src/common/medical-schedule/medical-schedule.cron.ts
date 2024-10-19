import cron from 'node-cron';

export class MedicalScheduleCron {
    public static register = async () => {
        try {
            cron.schedule('0 0 0 0 0 1', async () => {});
        } catch (err) {
            console.error(err);
        }
    };
}
