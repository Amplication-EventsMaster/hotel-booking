import { Room } from "../room/Room";

export type Hotel = {
  address: string | null;
  createdAt: Date;
  id: string;
  name: string | null;
  rating: number | null;
  rooms?: Array<Room>;
  updatedAt: Date;
};
