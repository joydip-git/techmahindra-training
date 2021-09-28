import { Repository } from "typeorm";
import { User } from "../entities/user.entity";
export declare class UsersRepository extends Repository<User> {
    constructor();
    findUserByName(username: string): Promise<User>;
}
