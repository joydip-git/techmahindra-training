import { IsEmail, IsOptional, IsString } from "class-validator";

export class UpdateUserCommand {

    @IsOptional()
    @IsEmail()
    email: string;

    @IsString()
    @IsOptional()
    password: string;

    @IsString()
    @IsOptional()
    username: string;
}