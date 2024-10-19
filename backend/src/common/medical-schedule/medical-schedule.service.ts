import { IUser } from '@common/user/user';
import { UserModel } from '@common/user/user';
import { IRegisterBooking, MedicalScheduleModel } from './medical-schedule.interface';
import { eventBus } from '@common/eventbus';
import { EventConstant } from '@common/constant/constant.event';

export class MedicalScheduleService {
    public static bookingSchedule = async (req_user: IUser, booking: IRegisterBooking) => {
        try {
            const user = await UserModel.findOneAndUpdate(
                {
                    phone: req_user.phone,
                },
                {
                    $push: {
                        booking: booking.schedule_booking_id,
                    },
                },
                {
                    new: true,
                    upsert: true,
                },
            );

            if (user) {
                eventBus.emit(EventConstant.BOOKING_SCHEDULE, {
                    user_id: user._id,
                    booking_id: booking.schedule_booking_id,
                });
            }
        } catch (err) {
            throw err;
        }
    };
}
