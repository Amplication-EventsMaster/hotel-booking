import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  ReferenceInput,
  SelectInput,
  NumberInput,
  TextInput,
} from "react-admin";

import { BookingTitle } from "../booking/BookingTitle";
import { HotelTitle } from "../hotel/HotelTitle";

export const RoomEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="bookings"
          reference="Booking"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={BookingTitle} />
        </ReferenceArrayInput>
        <ReferenceInput source="hotel.id" reference="Hotel" label="hotel">
          <SelectInput optionText={HotelTitle} />
        </ReferenceInput>
        <NumberInput label="price" source="price" />
        <NumberInput step={1} label="roomNumber" source="roomNumber" />
        <TextInput label="type" source="typeField" />
      </SimpleForm>
    </Edit>
  );
};
