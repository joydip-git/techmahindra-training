import { Controller } from "@nestjs/common";
import { MessagePattern, Payload } from '@nestjs/microservices'
import { CreateProductAdapter } from "src/application/products/adapters/create-product.adapter";
import DeleteProductAdapter from "src/application/products/adapters/delete-product.adapter";
import FetchProductsAdapter from "src/application/products/adapters/fetch-products.adapter";
import { SearchByProductIdAdapter } from "src/application/products/adapters/search-by-productid.adapter";
import { SearchByProductNameAdapter } from "src/application/products/adapters/search-by-productname.adapter";
import { UpdateProductAdapter } from "src/application/products/adapters/update-product.adapter";
import { CreateProductCommand } from "src/application/products/commnds/create-product.command";
import { UpdateProductCommand } from "src/application/products/commnds/upadate-product.command";
import { ProductsCommandPatterns } from "src/infrastructure/constants/products/products-command-pattern";

@Controller()
export class ProductsController {
    constructor(
        private createProductAdapter: CreateProductAdapter,
        private updateProductAdapter: UpdateProductAdapter,
        private deleteProductAdapter: DeleteProductAdapter,
        private fetchProductsAdapter: FetchProductsAdapter,
        private searchByIdProductAdapter: SearchByProductIdAdapter,
        private searchByNameProductAdapter: SearchByProductNameAdapter,
    ) {
        console.log('products service controller created')
    }

    @MessagePattern({ cmd: ProductsCommandPatterns.CREATE_PRODUCT })
    create(@Payload() product: CreateProductCommand) {
        console.log('products service controller create method')
        console.log(product)
        this.createProductAdapter.handle(product)
    }

    @MessagePattern({ cmd: ProductsCommandPatterns.UPDATE_PRODUCT })
    update(@Payload() product: UpdateProductCommand) {
        console.log('products service controller update method')
        console.log(product)
        this.updateProductAdapter.handle(product)
    }

    @MessagePattern({ cmd: ProductsCommandPatterns.DELETE_PRODUCT })
    delete(@Payload() productId: number) {
        console.log('products service controller delete method')
        console.log(productId)
        this.deleteProductAdapter.handle(productId)
    }

    @MessagePattern({ cmd: ProductsCommandPatterns.FETCH_PRODUCT_BY_NAME })
    fetchProductsByName(@Payload() productName: string) {
        console.log('products service controller fetchProductsByName method')
        console.log(productName)
        this.searchByNameProductAdapter.handle(productName)
    }

    @MessagePattern({ cmd: ProductsCommandPatterns.FETCH_PRODUCT_BY_ID })
    fetchProductById(@Payload() productId: number) {
        console.log('products service controller fetchProductById method')
        console.log(productId)
        this.searchByIdProductAdapter.handle(productId)
    }

    @MessagePattern({ cmd: ProductsCommandPatterns.FETCH_PRODUCTS })
    fetchProducts() {
        console.log('products service controller fetchProducts method')
        this.fetchProductsAdapter.handle()
    }
}