import { UsersRepository } from "src/infrastructure/repositories/users.repository";
export declare class AppService {
    private userRepo;
    constructor(userRepo: UsersRepository);
    getUser(username: string): Promise<import("../infrastructure/entities/user.entity").User>;
}
