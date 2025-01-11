import {
  GetForKidsDto,
  getForKidsDtoSchema,
} from "@/AppDtos/Dto/Models/ForKids/get-for-kids-dto";
import {
  CreateForKidsDto,
  createForKidsDtoSchema,
} from "@/AppDtos/Dto/Models/ForKids/create-for-kids-dto";
import {
  UpdateForKidsDto,
  updateForKidsDtoSchema,
} from "@/AppDtos/Dto/Models/ForKids/update-for-kids-dto";

import { CrudService } from "../shared/CrudService";

export class ForKidsService extends CrudService<
  GetForKidsDto,
  CreateForKidsDto,
  UpdateForKidsDto
> {
  public constructor() {
    super(getForKidsDtoSchema, createForKidsDtoSchema, updateForKidsDtoSchema);
  }
}
