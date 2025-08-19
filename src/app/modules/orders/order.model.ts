import { Schema, model } from "mongoose";
import { TOrder } from "./order.interface";

const orderSchema = new Schema<TOrder>({
    email: {
        type: String,
        required: [true, 'Email is required for the order']
    },
    productId: {
        type: String,
        required: [true, 'Product ID is required for the order']
    },
    price: {
        type: Number,
        required: [true, 'Price is required for the order']
    },
    quantity: {
        type: Number,
        required: [true, 'Quantity is required for the order']
    }
}, {
    toJSON: {
        transform: function(doc, ret) {
            delete ret.__v
            return ret;
        }
    }
})

export const Order = model("Order", orderSchema);