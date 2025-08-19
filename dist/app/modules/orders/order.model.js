"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order = void 0;
var mongoose_1 = require("mongoose");
var orderSchema = new mongoose_1.Schema({
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
        transform: function (doc, ret) {
            delete ret.__v;
            return ret;
        }
    }
});
exports.Order = (0, mongoose_1.model)("Order", orderSchema);
