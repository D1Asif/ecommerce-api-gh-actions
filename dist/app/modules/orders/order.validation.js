"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderValidationSchema = void 0;
var zod_1 = require("zod");
exports.orderValidationSchema = zod_1.z.object({
    email: zod_1.z.string().email(),
    productId: zod_1.z.string().min(24, "Invalid Product Id.").max(24, "Invalid product Id"),
    price: zod_1.z.number().nonnegative(),
    quantity: zod_1.z.number().positive()
});
