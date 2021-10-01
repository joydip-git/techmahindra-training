import { IsEmail, IsMobilePhone, IsString } from "class-validator";

export class AddCustomerCommand {
    @IsString()
    name: string;
    @IsString()
    city: string;
    mobile: number;
    @IsEmail()
    email: string;
    @IsString()
    password: string;
    @IsString()
    username: string;
}