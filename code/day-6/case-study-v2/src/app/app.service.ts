import { Injectable } from "@nestjs/common";
import { UsersRepository } from "src/infrastructure/repositories/users.repository";

@Injectable()
export class AppService {
    constructor(private userRepo: UsersRepository) {

    }
    getUser(username: string) {
        return this.userRepo.findUserByName(username)
    }
}