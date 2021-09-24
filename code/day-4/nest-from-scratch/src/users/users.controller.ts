import { Controller, Get } from "@nestjs/common";
import { UsersService } from "./users.service";

@Controller('users')
export class UsersController {

    constructor(private userService: UsersService) {
        console.log('controller object created')
    }

    @Get()
    getAllUsers(): {}[] {
        return this.userService.fetchUsers()
    }
}