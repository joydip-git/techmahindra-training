import { Body, Controller, Get, NotFoundException, Param, Post } from '@nestjs/common';
import { FindUserByNameAdapter } from 'src/application/adapters/finduserbyname.adapter';
import { LoginUserAdapter } from 'src/application/adapters/login-user.adapter';
import { RegisterUserAdapter } from 'src/application/adapters/regsiter-user.adapter';
import { LoginUserCommand } from 'src/application/commands/login-user.command';
import { RegisterUserCommand } from 'src/application/commands/register-user.command';
import { UseSerializer } from 'src/application/decorators/use-serializer.decorator';
import { AuthDto } from 'src/application/dtos/auth.dto';


@Controller('auth')
export class UsersController {
    constructor(
        private findUserByNameAdapter: FindUserByNameAdapter,
        private registerUserAdapter: RegisterUserAdapter,
        private loginUserAdapter: LoginUserAdapter
    ) {
        console.log('users controller created')
    }

    @UseSerializer(AuthDto)
    @Get('/user/:username')
    async fetchUserByUserName(@Param('username') name: string) {
        console.log('users fetch API called')
        const response = await this.findUserByNameAdapter.handle(name)
        console.log(response)
        if (response.isEmpty()) {
            throw new NotFoundException()
        }
        else {
            return response.get()
        }
    }

    @Post('/register')
    register(@Body() data: RegisterUserCommand) {
        return this.registerUserAdapter.handle(data)
    }

    @Post('/login')
    login(@Body() data: LoginUserCommand) {
        return this.loginUserAdapter.handle(data)
    }

    @Post('/logout')
    logout() {

    }
}