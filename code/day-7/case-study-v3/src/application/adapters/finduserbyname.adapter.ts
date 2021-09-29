import { Inject, Injectable } from '@nestjs/common';
import { IDomainService } from 'src/domain/ports/domain.service';

@Injectable()
export class FindUserByNameAdapter {
    constructor(@Inject('Repository') private userRepo: IDomainService) {

    }
    handler(username: string) {
        return this.userRepo.findUserByName(username)
    }
}