import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InfrastructureModule } from 'src/infrastructure/infrastructure.module';
import { UsersRepository } from 'src/infrastructure/repositories/users.repository';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
    imports: [
        InfrastructureModule,
        TypeOrmModule.forFeature([UsersRepository])
    ],
    controllers: [AppController],
    providers: [AppService,]
})
export class AppModule { }