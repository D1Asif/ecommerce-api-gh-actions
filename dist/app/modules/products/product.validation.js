"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productUpdateValidationSchema = exports.productValidationSchema = void 0;
var zod_1 = require("zod");
var variantValidationSchema = zod_1.z.object({
    type: zod_1.z.string().min(1),
    value: zod_1.z.string().min(1)
});
exports.productValidationSchema = zod_1.z.object({
    name: zod_1.z.string().min(1),
    description: zod_1.z.string()
        .min(1)
        .max(2000),
    price: zod_1.z.number().positive(),
    category: zod_1.z.string().min(1),
    tags: zod_1.z.array(zod_1.z.string()).nonempty(),
    variants: zod_1.z.array(variantValidationSchema).nonempty(),
    inventory: zod_1.z.object({
        quantity: zod_1.z.number().nonnegative(),
        inStock: zod_1.z.boolean()
    }),
    isDeleted: zod_1.z.boolean().default(false)
});
exports.productUpdateValidationSchema = zod_1.z.object({
    name: zod_1.z.string().min(1).optional(),
    description: zod_1.z.string()
        .min(1)
        .max(2000)
        .optional(),
    price: zod_1.z.number().positive().optional(),
    category: zod_1.z.string().min(1).optional(),
    tags: zod_1.z.array(zod_1.z.string()).nonempty().optional(),
    variants: zod_1.z.array(variantValidationSchema).nonempty().optional(),
    inventory: zod_1.z.object({
        quantity: zod_1.z.number().nonnegative(),
        inStock: zod_1.z.boolean()
    }).optional(),
});
