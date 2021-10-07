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
        console.log('add api called')
        return this.productsGatewayService.addProduct(product)
    }

    @Patch('/update/product/:id')
    updateProduct(@Body() product: UpdateProductCommand, @Param('id', ParseIntPipe) productId: number) {
        console.log('update api called')
        console.log(typeof (productId), product)
        return this.productsGatewayService.updateProduct(productId, product)
    }

    @Delete('/delete/:id')
    deleteProduct(@Param('id', ParseIntPipe) productId: number) {
        console.log('delete api called')
        return this.productsGatewayService.deleteProduct(productId)
    }

    @Get('/all')
    fetchAllProducts() {
        console.log('fetch all api called')
        return this.productsGatewayService.fetchProducts()
    }

    @Get('/get/product/:id')
    fetchProductById(@Param('id', ParseIntPipe) productId: number) {
        console.log('fetch by id api called')
        return this.productsGatewayService.searchProductsById(productId)
    }


    @Get('/get/:name')
    fetchProductsByName(@Param('name') productName: string) {
        console.log('fetch by name api called')
        return this.productsGatewayService.searchProductsByName(productName)
    }
}