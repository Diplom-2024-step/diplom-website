/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */

import { z } from 'zod';

export const getRoomTypeDtoSchema = z.object({
    name: z.string(),
    id: z.string().uuid(),
    price: z.number()
});

export type GetRoomTypeDto = z.infer<typeof getRoomTypeDtoSchema>;
