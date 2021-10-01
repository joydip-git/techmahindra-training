import { IsEmail, IsOptional, IsString } from "class-validator";

export class LoginUserCommand {
    @IsEmail()
    email: string;

    @IsString()
    @IsOptional()
    password: string;
}