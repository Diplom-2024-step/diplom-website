/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */


export const createForKidsDtoSchema = z.object({
    name: z.string().length(128)
});

export type CreateForKidsDto = z.infer<typeof createForKidsDtoSchema>;