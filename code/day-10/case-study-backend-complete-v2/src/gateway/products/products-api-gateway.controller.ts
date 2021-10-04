import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { CreateProductCommand } from 'src/application/products/commnds/create-product.command';
import { UpdateProductCommand } from 'src/application/products/commnds/upadate-product.command';
import { ProductsApiGatewayService } from './products-api-gateway.service';

@Controller('/products')
export class ProductsApiGatewayController {
    constructor(private productsGatewayService: ProductsApiGatewayService) {
        console.log('ProductsApiGatewayController created')
    }

    @Post('/add')
    addProduct(@Body() product: CreateProductCommand) {
        return this.productsGatewayService.addProduct(product)
    }

    @Patch('/update/:id')
    updateProduct(@Body() product: UpdateProductCommand, @Param('id', ParseIntPipe) productId: number) {
        return this.productsGatewayService.updateProduct(productId, product)
    }

    @Delete('/delete/:id')
    deleteProduct(@Param('id', ParseIntPipe) productId: number) {
        return this.productsGatewayService.deleteProduct(productId)
    }

    @Get('/all')
    fetchAllProducts() {
        return this.productsGatewayService.fetchProducts()
    }

    @Get('/get/:id')
    fetchProductById(@Param('id', ParseIntPipe) productId: number) {
        return this.productsGatewayService.searchProductsById(productId)
    }


    @Get('/get/name/:name')
    fetchProductsByName(productName: string) {
        return this.productsGatewayService.searchProductsByName(productName)
    }
}