import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { CreateProductCommand } from 'src/application/products/commnds/create-product.command';
import { UpdateProductCommand } from 'src/application/products/commnds/upadate-product.command';
import { ProductsApiGatewayService } from './products-api-gateway.service';

@Controller('/products')
export class ProductsApiGatewayController {
    constructor(private productsGatewayService: ProductsApiGatewayService) { }

    @Post('/add')
    addProduct(@Body() product: CreateProductCommand) {

    }

    @Patch('/update/:id')
    updateProduct(@Body() product: UpdateProductCommand, @Param('id', ParseIntPipe) productId: number) {

    }

    @Delete('/delete/:id')
    deleteProduct(@Param('id', ParseIntPipe) productId: number) {

    }

    @Get('/all')
    fetchAllProducts() {

    }

    @Get('/get/:id')
    fetchProductById(@Param('id', ParseIntPipe) productId: number) {

    }


    @Get('/get/name/:name')
    fetchProductsByName(productName: string) {

    }
}