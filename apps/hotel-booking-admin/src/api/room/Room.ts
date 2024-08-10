import { Booking } from "../booking/Booking";
import { Hotel } from "../hotel/Hotel";

export type Room = {
  bookings?: Array<Booking>;
  createdAt: Date;
  hotel?: Hotel | null;
  id: string;
  price: number | null;
  roomNumber: number | null;
  typeField: string | null;
  updatedAt: Date;
};
