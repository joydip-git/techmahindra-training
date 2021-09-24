import { NestFactory } from "@nestjs/core";
import { UsersModule } from "./users/users.module";

const bootstrap = async () => {
    const app = await NestFactory.create(UsersModule)
    await app.listen(4000, () => console.log('server started'))
}
bootstrap()