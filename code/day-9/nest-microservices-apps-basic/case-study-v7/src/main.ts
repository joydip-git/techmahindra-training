import { ValidationPipe } from '@nestjs/common';
// import { NestMicroserviceOptions } from '@nestjs/common/interfaces/microservices/nest-microservice-options.interface';
import { NestFactory } from '@nestjs/core';
//import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { ConfigService } from './infrastructure/config/config.service';
import { RootModule } from './root.module';

async function bootstrap() {
  const app = await NestFactory.create(RootModule);
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true
  }))
  await app.listen(parseInt(ConfigService.create().getPort()));
}
bootstrap();

/*
async function bootstrap1() {
  const app = await NestFactory.create(RootModule);
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true
  }))
  await app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.TCP,
    options: {
      port: parseInt(ConfigService.create().getPort())
    }
  })
  //await app.listen(parseInt(ConfigService.create().getPort()));
  app.startAllMicroservices()
}
bootstrap1();
*/
