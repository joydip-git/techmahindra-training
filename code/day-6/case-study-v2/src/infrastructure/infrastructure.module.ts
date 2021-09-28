import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigService } from './config/config.service';


@Module({
    imports: [TypeOrmModule.forRoot(
        ConfigService.create()
            .ensureValues([
                'POSTGRES_HOST',
                'POSTGRES_PORT',
                'POSTGRES_USERNAME',
                'POSTGRES_PASSWORD',
                'POSTGRES_DATABASE'
            ])
            .getTypeOrmConfig())]
})
export class InfrastructureModule { }
