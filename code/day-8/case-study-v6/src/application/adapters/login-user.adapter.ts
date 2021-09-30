import { Inject, Injectable } from '@nestjs/common';
import { IDomainService } from 'src/domain/ports/domain.service';
import { LoginUserCommand } from '../commands/login-user.command';

@Injectable()
export class LoginUserAdapter {
    constructor(@Inject('Repository') private userRepo: IDomainService) {

    }
    handle(loginData: LoginUserCommand) {
        return this.userRepo.findUserByName(null)
    }
}