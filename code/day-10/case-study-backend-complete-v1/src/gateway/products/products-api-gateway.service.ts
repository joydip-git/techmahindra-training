import { Inject, Injectable } from "@nestjs/common";
import { ClientProxy } from "@nestjs/microservices";
import { CreateProductCommand } from "src/application/products/commnds/create-product.command";
import { UpdateProductCommand } from "src/application/products/commnds/upadate-product.command";
import { ProductsSettingConstants } from "src/infrastructure/constants/products/products-settings";

@Injectable()
export class ProductsApiGatewayService {
    constructor(@Inject(ProductsSettingConstants.PRODUCTS_CLIENT_PROXY) private productsClient: ClientProxy) {

    }
    addProduct(product: CreateProductCommand) {

    }
    deleteProduct(productId: number) {

    }
    updateProduct(productId: number, product: UpdateProductCommand) {

    }
    searchProductsByName(productName: string) {

    }
    searchProductsById(productId: number) {

    }
    fetchProducts() {

    }
}