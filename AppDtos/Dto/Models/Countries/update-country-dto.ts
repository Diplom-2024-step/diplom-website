/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */

import { z } from "zod";

export const updateCountryDtoSchema = z.object({
  name: z.string().max(128),
  icon: z.string().max(2048),
  id: z.string().uuid(),
});

export type UpdateCountryDto = z.infer<typeof updateCountryDtoSchema>;
