import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/infrastructure/entities/user.entity';
import { Repository } from 'typeorm';
import { UserMessage } from './customer.message';

@Injectable()
export class CustomerService {
    constructor(@InjectRepository(User) private repo: Repository<User>) {

    }
    addCustomer(userData: UserMessage) {
        const user = this.repo.create({
            email: userData.email,
            password: userData.password,
            username: userData.username
        })
        return this.repo.save(user)
    }
}
