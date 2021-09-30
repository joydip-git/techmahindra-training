import { Controller, Get, Param } from '@nestjs/common';
import { FindUserByNameAdapter } from 'src/application/adapters/finduserbyname.adapter';
import { UseSerializer } from 'src/application/decorators/use-serializer.decorator';
import { UserDto } from 'src/application/dtos/user.dto';


@Controller('auth')
export class UsersController {
    constructor(private findUserByNameAdapter: FindUserByNameAdapter) {
        console.log('users controller created')
    }

    @UseSerializer(UserDto)
    @Get('/user/:username')
    fetchUserByUserName(@Param('username') name: string) {
        console.log('users fetch API called')
        return this.findUserByNameAdapter.handle(name)
    }
}