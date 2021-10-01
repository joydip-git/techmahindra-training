import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { UserModel } from "src/domain/models/user.model";
import { IDomainService } from "src/domain/ports/domain.service";
import { Repository } from "typeorm";
import { Optional } from "typescript-optional";
import { User } from "../entities/user.entity";
import { UserMapper } from "../mapper/user,mapper";

@Injectable()
export class UsersPostgresCoreService implements IDomainService {
    constructor(@InjectRepository(User) private userRepo: Repository<User>) {
        console.log('repo created')
    }
    async addUser(user: UserModel): Promise<Optional<UserModel>> {
        const data = this.userRepo.create({ email: user.email, password: user.password, username: user.username })
        const res = await this.userRepo.save(data)
        return UserMapper.toDomain(res)
    }
    authemticateUser(user: UserModel): Promise<Optional<UserModel>> {
        throw new Error("Method not implemented.");
    }
    async findUserByName(username: string): Promise<Optional<UserModel>> {
        const userEntity = await this.userRepo.createQueryBuilder("user")
            .where("user.username = :un", { un: username })
            .getOneOrFail()
        return UserMapper.toDomain(userEntity)
    }
}