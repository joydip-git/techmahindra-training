import { Inject, Injectable } from '@nestjs/common';
import { UserModel } from 'src/domain/models/user.model';
import { IDomainService } from 'src/domain/ports/domain.service';
import { Optional } from 'typescript-optional';

@Injectable()
export class FindUserByNameAdapter {
    constructor(@Inject('Repository') private userRepo: IDomainService) {

    }
    handle(username: string): Promise<Optional<UserModel>> {
        return this.userRepo.findUserByName(username)
    }
}