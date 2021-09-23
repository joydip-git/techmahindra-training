export interface IProduct {
    name: string;
    id: number;
    price: number;
    desc: string;
    print(): string;
}

//non-generic
// export interface IManager {
//     add(product: IProduct): boolean;
//     findAll(): IProduct[];
//     remove(id: number): IProduct;
// }

//generic
export interface IManager<T> {
    add(data: T): boolean;
    findAll(): T[];
    remove(id: number): T;
}
export class ProductManager implements IManager<IProduct> {
    add(data: IProduct): boolean {
        throw new Error("Method not implemented.");
    }
    findAll(): IProduct[] {
        throw new Error("Method not implemented.");
    }
    remove(id: number): IProduct {
        throw new Error("Method not implemented.");
    }
}

//generic class:
class Repository<T>{
    private repo: T[]
    constructor(repo: T[]) {
        this.repo = repo
    }
    getRepo(): T[] {
        return this.repo;
    }
}
//object of generic class
const productRepo = new Repository<IProduct>([])
productRepo.getRepo()

