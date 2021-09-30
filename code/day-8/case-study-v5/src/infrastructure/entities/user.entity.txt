//import { Exclude } from 'class-transformer';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
    constructor() {
        console.log('entity created')
    }
    @PrimaryGeneratedColumn()
    //@Exclude()
    id: number;

    @Column()
    email: string;

    @Column()
    //@Exclude()
    password: string;

    @Column()
    username: string;
}