export interface IProduct {
    name: string;
    id: number;
    price: number;
    desc: string;
    print(): string;
}

export class Mobile implements IProduct {
    name: string;
    id: number;
    price: number;
    desc: string;
    constructor(name: string, id: number, price: string, desc: string) {

    }
    print(): string {
        return null
    }
}
