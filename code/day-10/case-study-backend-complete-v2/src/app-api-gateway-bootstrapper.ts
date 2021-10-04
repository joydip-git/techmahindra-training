import { NestFactory } from '@nestjs/core';
import { AppApiGatewayModule } from './gateway/app-api-gateway.module';
import { ConfigService } from './infrastructure/configuration/config.service';

async function bootstrap() {
  const app = await NestFactory.create(AppApiGatewayModule)
  await app.listen(ConfigService.create().getPort())
}
bootstrap();
