import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { ConfigService } from './infrastructure/config/config.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(parseInt(ConfigService.create().getPort()));
}
bootstrap();
