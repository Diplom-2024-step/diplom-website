import {
  GetCountryDto,
  getCountryDtoSchema,
} from "@/AppDtos/Dto/Models/Countries/get-country-dto";
import {
  CreateCountryDto,
  createCountryDtoSchema,
} from "@/AppDtos/Dto/Models/Countries/create-country-dto";
import {
  UpdateCountryDto,
  updateCountryDtoSchema,
} from "@/AppDtos/Dto/Models/Countries/update-country-dto";

import { CrudService } from "../shared/CrudService";

export class CountryService extends CrudService<
  GetCountryDto,
  CreateCountryDto,
  UpdateCountryDto
> {
  public constructor() {
    super(getCountryDtoSchema, createCountryDtoSchema, updateCountryDtoSchema);
  }
}
