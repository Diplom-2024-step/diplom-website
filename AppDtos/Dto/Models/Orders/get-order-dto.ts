/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */

import { getTourDtoSchema } from "../Tours/get-tour-dto";
import { getUserDtoSchema } from "../../Users/get-user-dto";
import { getOrderStatusDtoSchema } from "../OrderStatuses/get-order-status-dto";
import { z } from 'zod';
import { getTransportationTypeDtoSchema } from "../TransportationTypes/get-transportation-type-dto";
import { getRoomTypeDtoSchema } from "../RoomTypes/get-room-type-dto";
import { getDietTypeDtoSchema } from "../DietTypes/get-diet-type-dto";
import { getCityDtoSchema } from "../Hotels/get-city-dto";
import { getHotelDtoSchema } from "../Hotels/get-hotel-dto";
import { getActivityDtoSchema } from "../Activities/get-activity-dto";

export const getOrderDtoSchema = z.object({
    hotel: getHotelDtoSchema,
    priceUSD: z.number().int(),
    startDate: z.date(),
    endDate: z.date(),
    mobilePhoneNumber: z.string(),
    fullName: z.string(),
    user: getUserDtoSchema.nullish(),
    admin: getUserDtoSchema.nullish(),
    orderStatus: z.string(),
    id: z.string().uuid(),
    duration: z.number().int().min(3).max(90),
    transportationType: getTransportationTypeDtoSchema,
    roomType: getRoomTypeDtoSchema,
    dietTypeId: getDietTypeDtoSchema,
    howManyAdults: z.number().int().min(0).max(10),
    howManyKids: z.number().int().min(0).max(10),
    fromCity: getCityDtoSchema,
    toCityId: getCityDtoSchema,
    activities: z.array(getActivityDtoSchema),

});

export type GetOrderDto = z.infer<typeof getOrderDtoSchema>;
