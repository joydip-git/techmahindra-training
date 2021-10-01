import { NestFactory } from '@nestjs/core';
import { AppModule } from './http-listener/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(8000);
}
bootstrap();