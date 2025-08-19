import { TProduct, TUpdateProduct } from "./product.interface";
import { Product } from "./product.model"

const createNewProductInDB = async (productData: TProduct) => {
    const response = await Product.create(productData);

    return response;
}

const getAllProductsFromDB = async (searchTerm: string | undefined) => {
    let response;

    if (searchTerm) {
        response = await Product.find({
            $or: [
                {name: {$regex: searchTerm, $options: 'i'}},
                {description: {$regex: searchTerm, $options: 'i'}}
            ]
        })
    } else {
        response = await Product.find();
    }

    return response;
}

const getAProductByIdFromDB = async (productId: string) => {
    if (productId.length !== 24) throw new Error("Invalid product ID");

    const response = await Product.findById(productId);

    return response;
}

const updateAProductInDB = async (productId: string, dataToUpdate: TUpdateProduct) => {
    if (!dataToUpdate) throw new Error("Update data is required for product update");
    if (productId.length !== 24) throw new Error("Invalid product ID");

    const response = await Product.updateOne(
        {_id: productId},
        {...dataToUpdate}
    );

    if (response.acknowledged === true) {
        if (response.matchedCount === 0) throw new Error(`No product with id: ${productId} exists`)
        const updatedProduct = await Product.findById(productId);
        return updatedProduct;
    }

    return null;
}

const deleteProductByIdFromDB = async(productId: string) => {
    const product = await Product.findById(productId);

    if (product) {
        if (product.isDeleted) {
            throw new Error(`Product with id: ${productId} does not exist.`)
        } else {
            product.isDeleted = true;
            const res = await product.save();
            if (res.isDeleted) return true;
        }
    } else {
        throw new Error(`Product with id: ${productId} does not exist.`)
    }
}

export const ProductServices = {
    createNewProductInDB,
    getAllProductsFromDB,
    getAProductByIdFromDB,
    updateAProductInDB,
    deleteProductByIdFromDB
}