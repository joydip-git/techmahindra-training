import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomerController } from './customer.controller';
import { CustomerService } from './customer.service';
import { Customer } from './entities/customer.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Customer]),
  ClientsModule.register([
    {
      name: 'CUSTOMER-SERVICE',
      transport: Transport.RMQ,
      options: {
        queue: 'CUSTOMER-QUEUE',
        urls: ['amqps://rtbaltjd:IpDg4VaDjAHSy3T4VRC16_oXPRNXk7gg@elk.rmq2.cloudamqp.com/rtbaltjd'],
        queueOptions: {
          durable: false
        }
      }
    }
  ])],
  controllers: [CustomerController],
  providers: [
    CustomerService
  ]
})
export class CustomerModule { }
