import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    // @PrimaryGeneratedColumn({ type: 'integer' })
    @PrimaryGeneratedColumn()
    id: number;

    // @Column({ type: 'character varying' })
    @Column()
    email: string;

    // @Column({ type: 'character varying' })
    @Column()
    password: string;

    // @Column({ type: 'character varying' })
    @Column()
    username: string;
}