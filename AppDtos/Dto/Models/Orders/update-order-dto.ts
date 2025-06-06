/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */

import { z } from "zod";

export const updateOrderDtoSchema = z.object({
  hotelId: z.string().uuid(),
  priceUSD: z.number().int().min(0).max(2147483647),
  startDate: z.date(),
  endDate: z.date(),
  mobilePhoneNumber: z.string().max(32),
  fullName: z.string().max(128),
  userId: z.string().uuid().nullish(),
  adminId: z.string().uuid().nullish(),
  orderStatus: z.string(),
  duration: z.number().int().min(3).max(90),
  transportationTypeId: z.string().uuid(),
  roomTypeId: z.string().uuid(),
  dietTypeId: z.string().uuid(),
  howManyAdults: z.number().int().min(0).max(10),
  howManyKids: z.number().int().min(0).max(10),
  fromCityId: z.string().uuid(),
  toCityId: z.string().uuid(),
  id: z.string().uuid(),
  activityIds: z.array(z.string().uuid()).default([]),
  tourId: z.string().uuid().nullish(),
});

export type UpdateOrderDto = z.infer<typeof updateOrderDtoSchema>;
