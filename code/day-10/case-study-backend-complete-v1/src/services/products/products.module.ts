import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CreateProductAdapter } from 'src/application/products/adapters/create-product.adapter';
import DeleteProductAdapter from 'src/application/products/adapters/delete-product.adapter';
import FetchProductsAdapter from 'src/application/products/adapters/fetch-products.adapter';
import { SearchByProductIdAdapter } from 'src/application/products/adapters/search-by-productid.adapter';
import { SearchByProductNameAdapter } from 'src/application/products/adapters/search-by-productname.adapter';
import { UpdateProductAdapter } from 'src/application/products/adapters/update-product.adapter';
import { Product } from 'src/core-domain/adapters/products/entities/product.entity';
import { ProductsRepository } from 'src/core-domain/adapters/products/repositories/products.repository';
import { ProductsSettingConstants } from 'src/infrastructure/constants/products/products-settings';
import { ProductsDatabaseModule } from 'src/infrastructure/database/products/products-database.module';
import { ProductsController } from './products.controller';

@Module({
    imports: [
        ProductsDatabaseModule,
        TypeOrmModule.forFeature([Product])
    ],
    controllers: [ProductsController],
    providers: [
        CreateProductAdapter,
        UpdateProductAdapter,
        SearchByProductNameAdapter,
        SearchByProductIdAdapter,
        FetchProductsAdapter,
        DeleteProductAdapter,
        {
            provide: ProductsSettingConstants.PRODUCTS_SERVICE,
            useClass: ProductsRepository
        }
    ],
})
export class ProductsModule {
    constructor() {
        console.log('ProductsModule created')
    }
};