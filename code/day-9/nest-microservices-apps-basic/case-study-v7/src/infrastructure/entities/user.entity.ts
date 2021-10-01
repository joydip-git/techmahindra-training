import { AfterInsert, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
    constructor() {
        console.log('entity created')
    }

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column()
    username: string;

    @AfterInsert()
    static notifyWhenAdded() {
        console.log('added')
    }
}