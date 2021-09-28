import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('/users')
export class AppController {
    constructor(private appSvc: AppService) {

    }
    @Get('/:username')
    fetchUserByUserName(@Param('username') name: string) {
        return this.appSvc.getUser(name)
    }
}