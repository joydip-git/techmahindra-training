import { EntityRepository, Repository } from "typeorm";
import { User } from "./user.entity";

/*
export interface IRepository<T> {
    addRecord(obj: T): void;
    getRecords(): T[]
}

@EntityRepository(User)
export class UsersRepository extends Repository<User> implements IRepository<User>{
    addRecord(obj: User): void {
        throw new Error("Method not implemented.");
    }
    getRecords(): User[] {
        throw new Error("Method not implemented.");
    }

}
*/

@EntityRepository(User)
export class UsersRepository extends Repository<User> {
    async findUserByName(username: string) {
        return this.createQueryBuilder("user")
            .where("user.username = :un", { un: username })
            .getOneOrFail()

    }
}