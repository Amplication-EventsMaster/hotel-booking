import { SortOrder } from "../../util/SortOrder";

export type HotelOrderByInput = {
  address?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  rating?: SortOrder;
  updatedAt?: SortOrder;
};
