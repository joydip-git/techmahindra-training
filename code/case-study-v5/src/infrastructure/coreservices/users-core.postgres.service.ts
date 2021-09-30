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