import {
  GetActivityDto,
  getActivityDtoSchema,
} from "@/AppDtos/Dto/Models/Activities/get-activity-dto";
import {
  CreateActivityDto,
  createActivityDtoSchema,
} from "@/AppDtos/Dto/Models/Activities/create-activity-dto";
import {
  UpdateActivityDto,
  updateActivityDtoSchema,
} from "@/AppDtos/Dto/Models/Activities/update-activity-dto";

import { CrudService } from "../shared/CrudService";

export class ActivityService extends CrudService<
  GetActivityDto,
  CreateActivityDto,
  UpdateActivityDto
> {
  public constructor() {
    super(
      getActivityDtoSchema,
      createActivityDtoSchema,
      updateActivityDtoSchema,
      "Activity"
    );
  }
}
