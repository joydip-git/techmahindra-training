"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app/app.module");
const config_service_1 = require("./infrastructure/config/config.service");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    await app.listen(parseInt(config_service_1.ConfigService.create().getPort()));
}
bootstrap();
//# sourceMappingURL=main.js.map