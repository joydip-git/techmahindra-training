import { Exclude } from "class-transformer";

export class UserDto {
    email: string;
    username: string;
    @Exclude()
    id: number;
    @Exclude()
    password: string;
}