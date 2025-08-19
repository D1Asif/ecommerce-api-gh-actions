"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRoutes = void 0;
var express_1 = __importDefault(require("express"));
var product_controller_1 = require("./product.controller");
var router = express_1.default.Router();
router.post('/', product_controller_1.ProductControllers.createNewProduct);
router.get('/', product_controller_1.ProductControllers.getAllProducts);
router.get('/:productId', product_controller_1.ProductControllers.getAProductById);
router.put('/:productId', product_controller_1.ProductControllers.updateAProduct);
router.delete('/:productId', product_controller_1.ProductControllers.deleteAProductById);
exports.ProductRoutes = router;
