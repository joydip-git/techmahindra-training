import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'HELLO_SERVICE',
        transport: Transport.RMQ,
        options: {
          urls: ['amqps://rtbaltjd:IpDg4VaDjAHSy3T4VRC16_oXPRNXk7gg@elk.rmq2.cloudamqp.com/rtbaltjd'],
          queue: 'test_queue',
          queueOptions: {
            durable: false
          }
        }
      }
    ])],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
