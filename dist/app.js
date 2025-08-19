"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var product_route_1 = require("./app/modules/products/product.route");
var order_route_1 = require("./app/modules/orders/order.route");
var cors_1 = __importDefault(require("cors"));
var app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use('/api/products', product_route_1.ProductRoutes);
app.use('/api/orders', order_route_1.OrderRoutes);
app.get('/', function (req, res) {
    res.send('Welcome to the ecommerce API!');
});
app.all('*', function (req, res) {
    res.status(400).json({
        success: false,
        message: "Route not found"
    });
});
exports.default = app;
