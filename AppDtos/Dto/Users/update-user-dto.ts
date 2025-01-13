/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */

import { z } from "zod";

export const updateUserDtoSchema = z.object({
  email: z.string().email().regex(/\S/),
  role: z.string().regex(/\S/),
  userName: z.string().max(128),
  id: z.string().uuid(),
  iconNumber: z.number().min(1).max(4),
  cityName: z.string().nullish(),
  phoneNumber: z.string().nullish(),
  birthDate: z.string().nullish(),
});

export type UpdateUserDto = z.infer<typeof updateUserDtoSchema>;
