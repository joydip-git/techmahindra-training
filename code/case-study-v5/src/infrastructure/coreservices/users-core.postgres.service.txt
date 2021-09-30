/*
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
*/
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { IDomainService } from "src/domain/ports/domain.service";
import { Repository } from "typeorm";
import { User } from "../entities/user.entity";

@Injectable()
export class UsersPostgresCoreService implements IDomainService {
    constructor(@InjectRepository(User) private userRepo: Repository<User>) {
        console.log('repo created')
    }
    findUserByName(username: string): Promise<User> {
        return this.userRepo.createQueryBuilder("user")
            .where("user.username = :un", { un: username })
            .getOneOrFail()
    }
}
/*
@Injectable()
export class UsersCoreService implements IDomainService {
    constructor(@Inject('repo') private userRepo: IRepositoryService) {
        console.log('repo created')
    }
    searchUser(username: string): Promise<User> {
        return this.userRepo.findUserByName(username)
    }
}

export interface IRepositoryService{
    findUserByName(username: string)
}

@Injectable()
@EntityRepository(User)
export class UsersPostgresRepository extends Repository<User> implements IRepoistoryService {
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

@Injectable()
@EntityRepository(User)
export class UsersMongooseRepository extends Repository<User> implements IRepoistoryService {
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
*/