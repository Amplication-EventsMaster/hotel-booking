import { BookingUpdateManyWithoutCustomersInput } from "./BookingUpdateManyWithoutCustomersInput";

export type CustomerUpdateInput = {
  bookings?: BookingUpdateManyWithoutCustomersInput;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  phoneNumber?: string | null;
};
