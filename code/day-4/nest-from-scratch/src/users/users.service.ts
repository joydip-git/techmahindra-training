import { Injectable } from "@nestjs/common"
import { UsersRepository } from "./users.repository";

@Injectable()
export class UsersService {
    constructor(private _repo: UsersRepository) {
        console.log('service object created')
    }
    fetchUsers() {
        return this._repo.Repo;
    }
}