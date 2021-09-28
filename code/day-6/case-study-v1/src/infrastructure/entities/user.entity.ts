//import { BaseEntity } from 'typeorm';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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

/*
@Entity()
export class User extends BaseEntity {
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

    static findUserByName(username: string) {
        return this.createQueryBuilder("user")
            .where("user.username = :un", { un: username })
            .getOneOrFail()

    }
}
*/
