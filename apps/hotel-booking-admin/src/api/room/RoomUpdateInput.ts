import { BookingUpdateManyWithoutRoomsInput } from "./BookingUpdateManyWithoutRoomsInput";
import { HotelWhereUniqueInput } from "../hotel/HotelWhereUniqueInput";

export type RoomUpdateInput = {
  bookings?: BookingUpdateManyWithoutRoomsInput;
  hotel?: HotelWhereUniqueInput | null;
  price?: number | null;
  roomNumber?: number | null;
  typeField?: string | null;
};
