import { Inject, Injectable } from "@nestjs/common";
import { ClientProxy } from "@nestjs/microservices";
import { CreateProductCommand } from "src/application/products/commnds/create-product.command";
import { UpdateProductCommand } from "src/application/products/commnds/upadate-product.command";
import { ProductModel } from "src/domian/products/models/product.model";
import { ProductsCommandPatterns } from "src/infrastructure/constants/products/products-command-pattern";
import { ProductsSettingConstants } from "src/infrastructure/constants/products/products-settings";

@Injectable()
export class ProductsApiGatewayService {
    constructor(
        @Inject(ProductsSettingConstants.PRODUCTS_CLIENT_PROXY) private productsClient: ClientProxy) {
        console.log('ProductsApiGatewayService created')
    }
    addProduct(product: CreateProductCommand) {
        return this.productsClient.send<ProductModel, CreateProductCommand>(
            { cmd: ProductsCommandPatterns.CREATE_PRODUCT },
            product)
    }
    deleteProduct(productId: number) {
        return this.productsClient.send<ProductModel, number>(
            { cmd: ProductsCommandPatterns.DELETE_PRODUCT },
            productId)
    }
    updateProduct(productId: number, product: UpdateProductCommand) {
        return this.productsClient.send<ProductModel, UpdateProductCommand>(
            { cmd: ProductsCommandPatterns.UPDATE_PRODUCT },
            { ...product, productId: productId })
    }
    searchProductsByName(productName: string) {
        return this.productsClient.send<ProductModel[], string>(
            { cmd: ProductsCommandPatterns.FETCH_PRODUCT_BY_NAME },
            productName)
    }
    searchProductsById(productId: number) {
        return this.productsClient.send<ProductModel, number>(
            { cmd: ProductsCommandPatterns.FETCH_PRODUCT_BY_ID },
            productId)
    }
    fetchProducts() {
        return this.productsClient.send<ProductModel[]>(
            { cmd: ProductsCommandPatterns.FETCH_PRODUCTS }, {})
    }
}