import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from './customer-service/app.module';

async function bootstrap() {
    const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
        transport: Transport.RMQ,
        options: {
            queue: 'CUSTOMER-QUEUE',
            urls: ['amqps://rtbaltjd:IpDg4VaDjAHSy3T4VRC16_oXPRNXk7gg@elk.rmq2.cloudamqp.com/rtbaltjd'],
            queueOptions: {
                durable: false
            }
        }
    })
    app.listen()
}
bootstrap();
