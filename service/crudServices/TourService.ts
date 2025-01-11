import {
  GetTourDto,
  getTourDtoSchema,
} from "@/AppDtos/Dto/Models/Tours/get-tour-dto";
import {
  CreateTourDto,
  createTourDtoSchema,
} from "@/AppDtos/Dto/Models/Tours/create-tour-dto";
import {
  UpdateTourDto,
  updateTourDtoSchema,
} from "@/AppDtos/Dto/Models/Tours/update-tour-dto";

import { CrudService } from "../shared/CrudService";

export class TourService extends CrudService<
  GetTourDto,
  CreateTourDto,
  UpdateTourDto
> {
  public constructor() {
    super(getTourDtoSchema, createTourDtoSchema, updateTourDtoSchema, "Tour");
  }
}
