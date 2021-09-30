import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigService } from './config/config.service';
import { Constants } from './constants/constants';


@Module({
    imports: [TypeOrmModule.forRoot(
        ConfigService.create()
            .ensureValues([
                Constants.POSTGRES_HOST,
                Constants.POSTGRES_PORT,
                Constants.POSTGRES_USERNAME,
                Constants.POSTGRES_PASSWORD,
                Constants.POSTGRES_DATABASE,
                Constants.ENTITIES_PATH,
                Constants.MIGRATION_TABLE_NAME,
                Constants.MIGRATIONS_FILE_PATH,
                Constants.MIGRATIONS_DIRECTORY
            ])
            .getTypeOrmConfig())]
})
export class InfrastructureModule { }
