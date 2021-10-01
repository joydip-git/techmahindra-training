import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/infrastructure/entities/user.entity';

@Module({
    imports: [
        TypeOrmModule.forRoot({
            "type": "postgres",
            "host": "localhost",
            "port": 5432,
            "username": "postgres",
            "password": "admin",
            "database": "appdb",
            "synchronize": true,
            "logging": false,
            "entities": [
                User
            ]
        })
    ]
})
export class DatabaseModule { }
