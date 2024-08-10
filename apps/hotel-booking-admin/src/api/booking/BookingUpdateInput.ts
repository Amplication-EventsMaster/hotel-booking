import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { RoomWhereUniqueInput } from "../room/RoomWhereUniqueInput";

export type BookingUpdateInput = {
  checkInDate?: Date | null;
  checkOutDate?: Date | null;
  customer?: CustomerWhereUniqueInput | null;
  room?: RoomWhereUniqueInput | null;
};
