export type TVariant = {
    type: string,
    value: string
}

export type TProduct = {
    name: string,
    description: string,
    price: number,
    category: string,
    tags: string[],
    variants: TVariant[],
    inventory: {
        quantity: number,
        inStock: boolean
    },
    isDeleted: boolean
}

export type TUpdateProduct = {
    name?: string,
    description?: string,
    price?: number,
    category?: string,
    tags?: string[],
    variants?: TVariant[],
    inventory?: {
        quantity: number,
        inStock: boolean
    }
}