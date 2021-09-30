import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersPostgresCoreService } from 'src/infrastructure/coreservices/users-core.postgres.service';
import { User } from 'src/infrastructure/entities/user.entity';
import { FindUserByNameAdapter } from './adapters/finduserbyname.adapter';
import { UsersController } from './controllers/users/users.controller';

@Module({
  imports: [
    //TypeOrmModule.forFeature([UsersRepository])
    TypeOrmModule.forFeature([User])
  ],
  controllers: [UsersController],
  providers: [
    {
      provide: FindUserByNameAdapter,
      useClass: FindUserByNameAdapter
    },
    {
      provide: 'Repository',
      useClass: UsersPostgresCoreService
    },]
})
export class ApplicationModule { }
