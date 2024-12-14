/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */

import { z } from 'zod';
import { getUserDtoSchema } from '../../Users/get-user-dto';

export const getReviewDtoSchema = z.object({
    body: z.string(),
    score: z.number().int(),
    createdAt: z.date(),
    reviewablePhotoableId: z.string().uuid(),
    id: z.string().uuid(),
    user:getUserDtoSchema
});

export type GetReviewDto = z.infer<typeof getReviewDtoSchema>;
