import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { CustomerModule } from './modules/customer.module';

@Module({
    imports: [DatabaseModule, CustomerModule]
})
export class AppModule { };