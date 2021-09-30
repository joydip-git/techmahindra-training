import { User } from "src/infrastructure/entities/user.entity";

export interface IDomainService {
    findUserByName(username: string): Promise<User>;
}