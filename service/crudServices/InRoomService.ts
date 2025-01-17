import {
  GetInRoomDto,
  getInRoomDtoSchema,
} from "@/AppDtos/Dto/Models/InRooms/get-in-room-dto";
import {
  CreateInRoomDto,
  createInRoomDtoSchema,
} from "@/AppDtos/Dto/Models/InRooms/create-in-room-dto";
import {
  UpdateInRoomDto,
  updateInRoomDtoSchema,
} from "@/AppDtos/Dto/Models/InRooms/update-in-room-dto";

import { CrudService } from "../shared/CrudService";

export class InRoomService extends CrudService<
  GetInRoomDto,
  CreateInRoomDto,
  UpdateInRoomDto
> {
  public constructor() {
    super(
      getInRoomDtoSchema,
      createInRoomDtoSchema,
      updateInRoomDtoSchema,
      "InRoom"
    );
  }
}
