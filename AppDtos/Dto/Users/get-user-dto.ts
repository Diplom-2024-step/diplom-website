/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */

import { z } from "zod";

export const getUserDtoSchema = z.object({
  email: z.string(),
  roles: z.array(z.string()),
  userName: z.string(),
  id: z.string().uuid(),
  favoriteHotelsIds: z.array(z.string()),
  favoriteToursIds: z.array(z.string()),
  iconNumber: z.number().min(1).max(4),
  cityName: z.string().nullish(),
  phoneNumber: z.string().nullish(),
  birthDate: z.date().nullish(),
});

export type GetUserDto = z.infer<typeof getUserDtoSchema>;
