import { NestFactory } from '@nestjs/core';
import { AppApiGatewayModule } from './gateway/app-api-gateway.module';
import { ConfigService } from './infrastructure/configuration/product-config.service';

async function bootstrap() {
  const app = await NestFactory.create(AppApiGatewayModule)
  app.enableCors({
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 204
  })
  await app.listen(ConfigService.create().getPort())
}
bootstrap();
