import { Inject, Injectable } from "@nestjs/common";
import { ProductModel } from "src/domian/products/models/product.model";
import { IProductsService } from "src/domian/products/ports/products.service";
import { IBaseAdapter } from "src/infrastructure/adapter-contract/base-adapter.adapter";
import { ProductsSettingConstants } from "src/infrastructure/constants/products/products-settings";
import { UpdateProductCommand } from "../commnds/upadate-product.command";

@Injectable()
export class UpdateProductAdapter implements IBaseAdapter<UpdateProductCommand, ProductModel>{
    constructor(@Inject(ProductsSettingConstants.PRODUCTS_SERVICE) private productsService: IProductsService) {
        console.log('UpdateProductAdapter created')
    }

    async handle(product?: UpdateProductCommand): Promise<ProductModel> {
        const result = await this.productsService.updateProduct(
            product.productId,
            { ...product }
        )
        if (result.isEmpty()) {
            throw new Error('product not found')
        } else {
            return result.get()
        }
    }

}