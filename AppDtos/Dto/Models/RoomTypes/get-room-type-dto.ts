/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */


export const getRoomTypeDtoSchema = z.object({
    name: z.string(),
    id: z.string().uuid()
});

export type GetRoomTypeDto = z.infer<typeof getRoomTypeDtoSchema>;