import { Optional } from "typescript-optional";
import { UserModel } from "../models/user.model";

export interface IDomainService {
    findUserByName(username: string): Promise<Optional<UserModel>>;
    addUser(user: UserModel): Promise<Optional<UserModel>>;
    authemticateUser(user: UserModel): Promise<Optional<UserModel>>;
}