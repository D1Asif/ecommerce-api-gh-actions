"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
var mongoose_1 = require("mongoose");
var variantSchema = new mongoose_1.Schema({
    type: {
        type: String,
        required: [true, 'Variant type is required']
    },
    value: {
        type: String,
        required: [true, 'Variant value is required']
    }
}, {
    _id: false
});
var productSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: [true, 'Product name is required']
    },
    description: {
        type: String,
        required: [true, 'Product description is required']
    },
    price: {
        type: Number,
        required: [true, 'Product price is required']
    },
    category: {
        type: String,
        required: [true, 'Product category is required']
    },
    tags: {
        type: [String],
        required: [true, 'Product tags are required'],
        default: []
    },
    variants: {
        type: [variantSchema],
        required: [true, 'Product variants are required']
    },
    inventory: {
        quantity: {
            type: Number,
            required: [true, 'Inventory quantity is required']
        },
        inStock: {
            type: Boolean,
            required: [true, 'Inventory inStock status is required']
        }
    },
    isDeleted: {
        type: Boolean,
        required: true,
        default: false
    }
}, {
    toJSON: {
        transform: function (doc, ret) {
            delete ret.__v;
            delete ret.isDeleted;
            return ret;
        }
    }
});
productSchema.pre('find', function (next) {
    this.find({ isDeleted: { $ne: true } });
    next();
});
productSchema.pre('findOne', function (next) {
    this.find({ isDeleted: { $ne: true } });
    next();
});
productSchema.pre('updateOne', function (next) {
    this.find({ isDeleted: { $ne: true } });
    next();
});
productSchema.pre('updateMany', function (next) {
    this.find({ isDeleted: { $ne: true } });
    next();
});
productSchema.pre('aggregate', function (next) {
    this.pipeline().unshift({ $match: { isDeleted: { $ne: true } } });
    next();
});
exports.Product = (0, mongoose_1.model)("Product", productSchema);
