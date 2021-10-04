import { Inject, Injectable } from "@nestjs/common";
import { ProductModel } from "src/domian/products/models/product.model";
import { IProductsService } from "src/domian/products/ports/products.service";
import { IBaseAdapter } from "src/infrastructure/adapter-contract/base-adapter.adapter";
import { ProductsSettingConstants } from "src/infrastructure/constants/products/products-settings";


@Injectable()
export class SearchByProductNameAdapter implements IBaseAdapter<string, ProductModel>{
    constructor(@Inject(ProductsSettingConstants.PRODUCTS_SERVICE) private productsService: IProductsService) {
        console.log('SearchByProductNameAdapter created')
    }
    handle(productName: string): Promise<ProductModel[]> {
        return this.productsService.fetchProductByName(productName)
    }
}