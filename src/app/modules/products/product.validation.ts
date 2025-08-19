import { z } from "zod";

const variantValidationSchema = z.object({
    type: z.string().min(1),
    value: z.string().min(1)
});

export const productValidationSchema = z.object({
    name: z.string().min(1),
    description: z.string()
        .min(1)
        .max(2000),
    price: z.number().positive(),
    category: z.string().min(1),
    tags: z.array(z.string()).nonempty(),
    variants: z.array(variantValidationSchema).nonempty(),
    inventory: z.object({
        quantity: z.number().nonnegative(),
        inStock: z.boolean()
    }),
    isDeleted: z.boolean().default(false)
});

export const productUpdateValidationSchema = z.object({
    name: z.string().min(1).optional(),
    description: z.string()
        .min(1)
        .max(2000)
        .optional(),
    price: z.number().positive().optional(),
    category: z.string().min(1).optional(),
    tags: z.array(z.string()).nonempty().optional(),
    variants: z.array(variantValidationSchema).nonempty().optional(),
    inventory: z.object({
        quantity: z.number().nonnegative(),
        inStock: z.boolean()
    }).optional(),
});