import { Request, Response } from "express";
import { orderValidationSchema } from "./order.validation";
import { OrderServices } from "./order.service";

const createANewOrder = async (req: Request, res: Response) => {
    try {
        const orderData = req.body;

        const { success, data, error } = orderValidationSchema.safeParse(orderData);

        if (!success && error) {
            res.status(500).json({
                success: false,
                message: (error.issues.map(({ path, message }, index) => {
                    return `${index + 1}. Field: ${path.join(" > ")}, Issue: ${message}`
                })).join("; ")
            })
        }

        if (success && data) {
            const result = await OrderServices.createANewOrderInDB(data);

            res.status(201).json({
                success: true,
                message: "Order created successfully!",
                data: result
            })
        }

    } catch (err: any) {
        res.status(500).json({
            success: false,
            message: err.message ?? "something went wrong"
        })
    }
}

const getAllOrders = async (req: Request, res: Response) => {
    const {email} = req.query;

    const emailQuery = typeof email === 'string' ? email : undefined;

    try {
        const result = await OrderServices.getAllOrdersFromDB(emailQuery);

        if (result.length > 0) {
            res.status(201).json({
                success: true,
                message: emailQuery ? "Orders fetched successfully for user email!" : "Orders fetched successfully!",
                data: result
            })
        } else {
            throw new Error("Order not found")
        }

    } catch (err: any) {
        res.status(500).json({
            success: false,
            message: err.message ?? "something went wrong"
        })
    }
}

export const OrderControllers = {
    createANewOrder,
    getAllOrders
}