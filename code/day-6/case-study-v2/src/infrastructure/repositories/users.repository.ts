import { Injectable } from "@nestjs/common";
import { EntityRepository, Repository } from "typeorm";
import { User } from "../entities/user.entity";

@Injectable()
@EntityRepository(User)
export class UsersRepository extends Repository<User> {
    constructor() {
        super()
        console.log('repo created')
    }
    async findUserByName(username: string) {
        return this.createQueryBuilder("user")
            .where("user.username = :un", { un: username })
            .getOneOrFail()

    }
}