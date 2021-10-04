import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ProductModel } from "src/domian/products/models/product.model";
import { IProductsService } from "src/domian/products/ports/products.service";
import { ProductMapper } from "src/infrastructure/mapper/products/product.mapper";
import { Repository } from "typeorm";
import { Optional } from "typescript-optional";
import { Product } from "../entities/product.entity";

@Injectable()
export class ProductsRepository implements IProductsService {
    constructor(@InjectRepository(Product) private productsRepository: Repository<Product>) {
        console.log('ProductsRepository created')
    }
    async fetchProducts(): Promise<ProductModel[]> {
        const allProducts = await this.productsRepository.find()
        return ProductMapper.toDomains(allProducts)
    }
    async fetchProductById(productId: number): Promise<Optional<ProductModel>> {
        const found = await this.productsRepository.findOne({ productId: productId })
        return ProductMapper.toDomain(found)
    }
    async fetchProductByName(productName: string): Promise<ProductModel[]> {
        const all = await this.productsRepository.find()
        //const result = new Array<Product>()
        // all.forEach(p => {
        //     if (p.productName.indexOf(productName) != -1) {
        //         result.push(p)
        //     }
        // })
        const result = all.filter(p => p.productName.toLocaleLowerCase().indexOf(productName.toLocaleLowerCase()) != -1)
        return ProductMapper.toDomains(result)
    }
    async addProduct(product: ProductModel): Promise<ProductModel> {
        const added = await this.productsRepository.save({
            price: product.price,
            description: product.description,
            productName: product.productName,
            imageUrl: product.imageUrl,
            releaseDate: product.releaseDate
        })
        return ProductMapper.toDomain(added).get()
    }
    async deleteProduct(productId: any): Promise<Optional<ProductModel>> {
        const found = await this.productsRepository.findOne({ productId: productId })
        let deleted: Product | undefined;
        if (found) {
            deleted = await this.productsRepository.remove(found)
        }
        return ProductMapper.toDomain(deleted)
    }
    async updateProduct(productId: number, product: Partial<ProductModel>): Promise<Optional<ProductModel>> {
        const found = await this.productsRepository.findOne({ productId: productId })
        let updated: Product | undefined;
        if (updated) {
            const updateProduct = {
                ...found,
                ...product
            }
            updated = await this.productsRepository.save(updated)
        }
        return ProductMapper.toDomain(updated)
    }

}