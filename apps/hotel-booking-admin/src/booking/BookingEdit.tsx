import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { CustomerTitle } from "../customer/CustomerTitle";
import { RoomTitle } from "../room/RoomTitle";

export const BookingEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="checkInDate" source="checkInDate" />
        <DateTimeInput label="checkOutDate" source="checkOutDate" />
        <ReferenceInput source="customer.id" reference="Customer">
          <SelectInput optionText={CustomerTitle} label="customer" />
        </ReferenceInput>
        <ReferenceInput source="room.id" reference="Room">
          <SelectInput optionText={RoomTitle} label="room" />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
