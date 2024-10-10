import { EventConstant } from '@common/constant/constant.event';
import { eventBus } from '@common/eventbus';
import { IRegisterBooking, MedicalScheduleModel } from './medical-schedule.interface';

export class MedicalScheduleEvent {
    public static register = () => {
        eventBus.on(EventConstant.BOOKING_SCHEDULE, MedicalScheduleEvent.handleBooking);
    };

    public static handleBooking = async (data: IRegisterBooking) => {
        try {
            const booking = await MedicalScheduleModel.findByIdAndUpdate(
                data.schedule_booking_id,
                {
                    $push: {
                        schedule: {
                            user_id: data.user_id,
                            time: data.time,
                        },
                    },
                },
                { new: true },
            );
        } catch (err) {
            console.error(err);
        }
    };
}
