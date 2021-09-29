import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
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
