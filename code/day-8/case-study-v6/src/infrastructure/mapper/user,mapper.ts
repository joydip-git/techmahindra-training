import { UserModel } from "src/domain/models/user.model";
import { Optional } from "typescript-optional";
import { User } from "../entities/user.entity";

export class UserMapper {
    static toDomain(userEntity: User): Optional<UserModel> {
        if (!userEntity) {
            return Optional.empty<UserModel>()
        }
        const userModel = new UserModel(userEntity.email, userEntity.password, userEntity.username, userEntity.id)

        return Optional.of(userModel)
    }
    static toDomains(userEntities: User[]): UserModel[] {
        const userModels = new Array<UserModel>()
        if (userEntities && userEntities.length > 0) {
            userEntities.forEach(
                (entity) => {
                    const optionalUserModel = this.toDomain(entity)
                    userModels.push(optionalUserModel.get())
                }
            )
        }
        return userModels
    }
    // static toCore(user: UserModel): User {
    //     const userEntity = new User()
    //     userEntity.
    // }
}