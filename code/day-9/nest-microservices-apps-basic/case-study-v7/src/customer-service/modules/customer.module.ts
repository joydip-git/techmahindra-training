import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/infrastructure/entities/user.entity';
import { CustomerController } from './customer.controller';
import { CustomerService } from './customer.service';

@Module({
    imports: [TypeOrmModule.forFeature([User])],
    controllers: [CustomerController],
    providers: [
        CustomerService
    ]
})
export class CustomerModule { }
