import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { ConsumerModule } from './service-listener/consumer.module';

async function bootstrap() {
    const app = await NestFactory.createMicroservice<MicroserviceOptions>(ConsumerModule, {
        transport: Transport.RMQ,
        options: {
            urls: ['amqps://rtbaltjd:IpDg4VaDjAHSy3T4VRC16_oXPRNXk7gg@elk.rmq2.cloudamqp.com/rtbaltjd'],
            queue: 'test_queue',
            queueOptions: {
                durable: false
            }
        }
    })
    app.listen()
}
bootstrap();
