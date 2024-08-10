import { RoomCreateNestedManyWithoutHotelsInput } from "./RoomCreateNestedManyWithoutHotelsInput";

export type HotelCreateInput = {
  address?: string | null;
  name?: string | null;
  rating?: number | null;
  rooms?: RoomCreateNestedManyWithoutHotelsInput;
};
