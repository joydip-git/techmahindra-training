import { AfterInsert, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Customer {
    @Column()
    name: string;

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    city: string;

    @Column()
    mobile: number;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column()
    username: string;

    @AfterInsert()
    notify() {
        console.log('created')
    }
}