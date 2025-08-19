import { Product } from "../products/product.model";
import { TOrder } from "./order.interface";
import { Order } from "./order.model";

const createANewOrderInDB = async (orderData: TOrder) => {
    const { productId } = orderData;
    const product = await Product.findById(productId);

    if (!product) {
        throw new Error("Product does not exist");
    }

    if (product.inventory.quantity < orderData.quantity) {
        throw new Error("Insufficient quantity available in inventory");
    }

    const response = await Order.create(orderData);

    if (response) {
        product.inventory.quantity = product.inventory.quantity - orderData.quantity;
        await product.save();
        return response;
    } else {
        throw new Error("Database error");
    }

}

const getAllOrdersFromDB = async (email: string | undefined) => {
    let response;

    if (email) {
        response = await Order.find({ email })
    } else {
        response = await Order.find();
    }

    return response;
}

export const OrderServices = {
    createANewOrderInDB,
    getAllOrdersFromDB
}