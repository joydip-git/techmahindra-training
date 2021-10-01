import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { CustomerModule } from './customer/customer.module';
import { DatabaseModule } from './database/database.module';

@Module({
    imports: [
        DatabaseModule,
        CustomerModule,
    ],
    providers: [],
})
export class AppModule { };