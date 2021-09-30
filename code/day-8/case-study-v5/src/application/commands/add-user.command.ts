import { IsEmail, IsString } from "class-validator";

export class AddUserCommand {
    @IsEmail()
    email: string;

    @IsString()
    password: string;

    @IsString()
    username: string;
}