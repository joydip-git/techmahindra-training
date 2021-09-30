import { Exclude, Expose } from "class-transformer";

export class AuthDto {
    @Expose()
    email: string;
    @Expose()
    username: string;
}