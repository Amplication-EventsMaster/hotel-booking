import { RoomUpdateManyWithoutHotelsInput } from "./RoomUpdateManyWithoutHotelsInput";

export type HotelUpdateInput = {
  address?: string | null;
  name?: string | null;
  rating?: number | null;
  rooms?: RoomUpdateManyWithoutHotelsInput;
};
