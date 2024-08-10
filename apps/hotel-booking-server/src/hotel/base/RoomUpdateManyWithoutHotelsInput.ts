/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { RoomWhereUniqueInput } from "../../room/base/RoomWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class RoomUpdateManyWithoutHotelsInput {
  @Field(() => [RoomWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [RoomWhereUniqueInput],
  })
  connect?: Array<RoomWhereUniqueInput>;

  @Field(() => [RoomWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [RoomWhereUniqueInput],
  })
  disconnect?: Array<RoomWhereUniqueInput>;

  @Field(() => [RoomWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [RoomWhereUniqueInput],
  })
  set?: Array<RoomWhereUniqueInput>;
}

export { RoomUpdateManyWithoutHotelsInput as RoomUpdateManyWithoutHotelsInput };
