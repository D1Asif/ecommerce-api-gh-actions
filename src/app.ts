import express, { Request, Response } from 'express'
import { ProductRoutes } from './app/modules/products/product.route';
import { OrderRoutes } from './app/modules/orders/order.route';
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

app.use('/api/products', ProductRoutes);
app.use('/api/orders', OrderRoutes);

app.get('/', (req: Request, res: Response) => {
    res.send('Welcome to the E-commerce API!')
})

app.all('*', (req: Request, res: Response) => {
    res.status(400).json({
        success: false,
        message: "Route not found"
    });
})

export default app;