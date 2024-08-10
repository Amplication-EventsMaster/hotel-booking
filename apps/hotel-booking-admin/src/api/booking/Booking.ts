import { Customer } from "../customer/Customer";
import { Room } from "../room/Room";

export type Booking = {
  checkInDate: Date | null;
  checkOutDate: Date | null;
  createdAt: Date;
  customer?: Customer | null;
  id: string;
  room?: Room | null;
  updatedAt: Date;
};
