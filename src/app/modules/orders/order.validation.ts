import { z } from "zod";

export const orderValidationSchema = z.object({
    email: z.string().email(),
    productId: z.string().min(24, "Invalid Product Id.").max(24, "Invalid product Id"),
    price: z.number().nonnegative(),
    quantity: z.number().positive()
})