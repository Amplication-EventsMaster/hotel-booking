import { BookingListRelationFilter } from "../booking/BookingListRelationFilter";
import { HotelWhereUniqueInput } from "../hotel/HotelWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type RoomWhereInput = {
  bookings?: BookingListRelationFilter;
  hotel?: HotelWhereUniqueInput;
  id?: StringFilter;
  price?: FloatNullableFilter;
  roomNumber?: IntNullableFilter;
  typeField?: StringNullableFilter;
};
