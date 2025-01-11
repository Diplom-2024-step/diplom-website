import {
  GetHotelDto,
  getHotelDtoSchema,
} from "@/AppDtos/Dto/Models/Hotels/get-hotel-dto";
import {
  CreateHotelDto,
  createHotelDtoSchema,
} from "@/AppDtos/Dto/Models/Hotels/create-hotel-dto";
import {
  UpdateHotelDto,
  updateHotelDtoSchema,
} from "@/AppDtos/Dto/Models/Hotels/update-hotel-dto";

import { CrudService } from "../shared/CrudService";

export class HotelService extends CrudService<
  GetHotelDto,
  CreateHotelDto,
  UpdateHotelDto
> {
  public constructor() {
    super(getHotelDtoSchema, createHotelDtoSchema, updateHotelDtoSchema, "Hotel");
  }
}
