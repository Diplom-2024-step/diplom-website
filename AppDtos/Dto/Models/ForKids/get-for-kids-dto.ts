/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */

import { z } from "zod";

export const getForKidsDtoSchema = z.object({
  name: z.string(),
  id: z.string().uuid(),
});

export type GetForKidsDto = z.infer<typeof getForKidsDtoSchema>;
