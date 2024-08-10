import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { RoomTitle } from "../room/RoomTitle";

export const HotelEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="address" source="address" />
        <TextInput label="name" source="name" />
        <NumberInput label="rating" source="rating" />
        {/* <ReferenceArrayInput source="rooms" reference="Room">
          <SelectArrayInput
            optionText={RoomTitle}
            format={(value: any) => value && value.map((v: any) => v.id)}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          />
        </ReferenceArrayInput> */}
      </SimpleForm>
    </Edit>
  );
};
