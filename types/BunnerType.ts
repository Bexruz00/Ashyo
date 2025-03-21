import { ProductType } from "./ProductType";

export interface BunnerType {
    id: number,
    product_id: number,
    category_id: number | string | null,
    title: string | null,
    description: string,
    image: string,
    name: string,
    createdAt: string,
    updatedAt: string,
    product: ProductType
}