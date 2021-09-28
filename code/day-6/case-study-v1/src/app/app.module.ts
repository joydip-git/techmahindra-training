import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/infrastructure/entities/user.entity';
import { InfrastructureModule } from 'src/infrastructure/infrastructure.module';
import { UsersRepository } from 'src/infrastructure/repositories/users.repository';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
    imports: [
        InfrastructureModule,
        // TypeOrmModule.forFeature([User])
        TypeOrmModule.forFeature([UsersRepository])
    ],
    controllers: [AppController],
    providers: [AppService,]
})
export class AppModule { }

/**
 * imports: [
        TypeOrmModule.forRoot({
            name: 'default',
            type: 'postgres',
            host: 'localhost',
            port: 5432,
            username: 'postgres',
            password: 'admin',
            database: 'appdb',
            synchronize: true,
            logging: false,
            entities: ['dist/infrastructure/entities/*.entity{.ts,.js}'],
        }),
    ]

     imports: [
        TypeOrmModule.forRoot(),
    ]
 */
