import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices'
import { ProductsModule } from './services/products/products.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(ProductsModule, {
    transport: Transport.RMQ,
    options: {
      urls: ['amqps://admrdcap:pLXEEO-vkQ8eiHHDy491uJ0nL7c2U4mA@beaver.rmq.cloudamqp.com/admrdcap'],
      queue: 'products_service_queue',
      queueOptions: {
        durable: false
      }
    }
  })
  app.listen()
}
bootstrap();
