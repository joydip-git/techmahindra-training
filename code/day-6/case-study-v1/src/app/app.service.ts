import { Injectable } from "@nestjs/common";
//import { InjectRepository } from "@nestjs/typeorm";
//import { User } from "src/infrastructure/entities/user.entity";
import { UsersRepository } from "src/infrastructure/repositories/users.repository";
//import { Repository } from "typeorm";

@Injectable()
export class AppService {
    constructor(private userRepo: UsersRepository) {

    }
    getUser(username: string) {
        // return this.userRepo.findOneOrFail({ username: username })
        return this.userRepo.findUserByName(username)
    }
}
/*
@Injectable()
export class AppService {
    constructor(@InjectRepository(User) private userRepo: Repository<User>) {

    }
    getUser(username: string) {
        return this.userRepo.findOneOrFail({ username: username })
    }
}
*/
/**
 *  getUser(username: string) {
        return User.findUserByName(username)
    }
 */