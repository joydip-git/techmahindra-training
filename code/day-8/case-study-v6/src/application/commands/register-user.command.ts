import { IsEmail, IsString } from "class-validator";

export class RegisterUserCommand {
    @IsEmail()
    email: string;

    @IsString()
    password: string;

    @IsString()
    username: string;
}