import { z } from 'zod';

export const createReviewOnCompanyDtoSchema = z.object({
  priceQuality: z.number().int().min(0).max(100).default(0),
  dwelling: z.number().int().min(0).max(100).default(1),
  organizationOfTrips: z.number().int().min(0).max(100).default(1),
  service: z.number().int().min(0).max(100).default(1),
  body: z.string().max(2048).default(''),
  score: z.number().int().min(1).max(5).default(5),
  userId: z.string().default(''),
});

export type CreateReviewOnCompanyDto = z.infer<typeof createReviewOnCompanyDtoSchema>;
