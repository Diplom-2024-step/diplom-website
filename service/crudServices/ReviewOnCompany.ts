import { GetReviewDto, getReviewDtoSchema } from "@/AppDtos/Dto/Models/Reviews/get-review-dto";
import { GetReviewOnCompanyDto, getReviewOnCompanyDtoSchema } from "@/AppDtos/Dto/Models/ReviewOnCompanies/get-review-on-company-dto";
import { CrudService } from "../shared/CrudService";
import { CreateReviewOnCompanyDto, createReviewOnCompanyDtoSchema } from "@/AppDtos/Dto/Models/ReviewOnCompanies/create-review-on-company-dto";
import { UpdateReviewOnCompanyDto, updateReviewOnCompanyDtoSchema } from "@/AppDtos/Dto/Models/ReviewOnCompanies/update-review-on-company-dto";
import { createReviewDtoSchema } from "@/AppDtos/Dto/Models/Reviews/create-review-dto";
import { updateReviewDtoSchema } from "@/AppDtos/Dto/Models/Reviews/update-review-dto";

export class ReviewOnCompanyService extends CrudService<
    GetReviewOnCompanyDto,
    CreateReviewOnCompanyDto,
    UpdateReviewOnCompanyDto
> {
    public constructor() {
        super(getReviewOnCompanyDtoSchema, createReviewOnCompanyDtoSchema, updateReviewOnCompanyDtoSchema);
    }
}
