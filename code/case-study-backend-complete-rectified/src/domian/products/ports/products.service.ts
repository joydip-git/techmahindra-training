import { Optional } from "typescript-optional";
import { ProductModel } from "../models/product.model";

export interface IProductsService {
    fetchProducts(): Promise<ProductModel[]>;
    fetchProductById(productId: number): Promise<Optional<ProductModel>>;
    fetchProductByName(productName: string): Promise<ProductModel[]>;
    addProduct(product: ProductModel): Promise<ProductModel>;
    deleteProduct(productId): Promise<Optional<ProductModel>>;
    updateProduct(productId: number, product: Partial<ProductModel>): Promise<Optional<ProductModel>>;
}