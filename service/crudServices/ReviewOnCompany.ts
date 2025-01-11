import {
  GetReviewOnCompanyDto,
  getReviewOnCompanyDtoSchema,
} from "@/AppDtos/Dto/Models/ReviewOnCompanies/get-review-on-company-dto";
import {
  CreateReviewOnCompanyDto,
  createReviewOnCompanyDtoSchema,
} from "@/AppDtos/Dto/Models/ReviewOnCompanies/create-review-on-company-dto";
import {
  UpdateReviewOnCompanyDto,
  updateReviewOnCompanyDtoSchema,
} from "@/AppDtos/Dto/Models/ReviewOnCompanies/update-review-on-company-dto";

import { CrudService } from "../shared/CrudService";

export class ReviewOnCompanyService extends CrudService<
  GetReviewOnCompanyDto,
  CreateReviewOnCompanyDto,
  UpdateReviewOnCompanyDto
> {
  public constructor() {
    super(
      getReviewOnCompanyDtoSchema,
      createReviewOnCompanyDtoSchema,
      updateReviewOnCompanyDtoSchema
    );
  }
}
