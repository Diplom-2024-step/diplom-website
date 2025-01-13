/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */

import { z } from "zod";

import { getCountryDtoSchema } from "../Countries/get-country-dto";

export const getCityDtoSchema = z.object({
  country: getCountryDtoSchema,
  name: z.string(),
  latitud: z.number(),
  longitud: z.number(),
  id: z.string().uuid(),
});

export type GetCityDto = z.infer<typeof getCityDtoSchema>;
