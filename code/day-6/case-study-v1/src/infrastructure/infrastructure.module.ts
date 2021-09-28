import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersRepository } from './repositories/users.repository';

@Module({
    imports: [TypeOrmModule.forRoot()],
    // providers: [UsersRepository],
    // exports: [UsersRepository]
})
export class InfrastructureModule { }
