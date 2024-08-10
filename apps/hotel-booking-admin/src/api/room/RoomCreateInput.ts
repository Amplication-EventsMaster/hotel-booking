import { BookingCreateNestedManyWithoutRoomsInput } from "./BookingCreateNestedManyWithoutRoomsInput";
import { HotelWhereUniqueInput } from "../hotel/HotelWhereUniqueInput";

export type RoomCreateInput = {
  bookings?: BookingCreateNestedManyWithoutRoomsInput;
  hotel?: HotelWhereUniqueInput | null;
  price?: number | null;
  roomNumber?: number | null;
  typeField?: string | null;
};
