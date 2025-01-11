import { z } from "zod";

import { getUserDtoSchema } from "../../Users/get-user-dto";

export const getReviewOnCompanyDtoSchema = z.object({
  priceQuality: z.number().int(),
  dwelling: z.number().int(),
  organizationOfTrips: z.number(),
  service: z.number().int(),
  body: z.string().max(2048),
  score: z.number().int().min(1).max(5),
  createdAt: z.date(),
  user: getUserDtoSchema,
  id: z.string().uuid(),
});

export type GetReviewOnCompanyDto = z.infer<typeof getReviewOnCompanyDtoSchema>;
