/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */

import { z } from "zod";

import { getHotelDtoSchema } from "../Hotels/get-hotel-dto";
import { getTransportationTypeDtoSchema } from "../TransportationTypes/get-transportation-type-dto";
import { getRoomTypeDtoSchema } from "../RoomTypes/get-room-type-dto";
import { getDietTypeDtoSchema } from "../DietTypes/get-diet-type-dto";
import { getActivityDtoSchema } from "../Activities/get-activity-dto";

import { getCityDtoSchema } from "./get-city-dto";

export const getTourDtoSchema = z.object({
  name: z.string(),
  hotel: getHotelDtoSchema,
  fromCity: getCityDtoSchema,
  toCity: getCityDtoSchema,
  priceUSD: z.number().int(),
  description: z.string(),
  duration: z.number().int(),
  transportationType: getTransportationTypeDtoSchema,
  roomType: getRoomTypeDtoSchema,
  dietType: getDietTypeDtoSchema,
  howManyAdults: z.number().int(),
  howManyKids: z.number().int(),
  urls: z.array(z.string()),
  activities: z.array(getActivityDtoSchema),
  id: z.string().uuid(),
});

export type GetTourDto = z.infer<typeof getTourDtoSchema>;
