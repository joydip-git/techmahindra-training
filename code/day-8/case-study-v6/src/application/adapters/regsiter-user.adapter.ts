import { Inject, Injectable } from '@nestjs/common';
import { IDomainService } from 'src/domain/ports/domain.service';
import { RegisterUserCommand } from '../commands/register-user.command';

@Injectable()
export class RegisterUserAdapter {
    constructor(@Inject('Repository') private userRepo: IDomainService) {

    }
    handle(registrationData: RegisterUserCommand) {
        return this.userRepo.findUserByName(null)
    }
}