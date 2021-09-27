import { NestFactory } from "@nestjs/core"
import { AppModule } from "./modules/app/app.module"
import { ConfigOptions } from './modules/configuration/configoptions.model'

// const args = process.argv.slice(2)
// // console.log(args[1])

const boostatrap = async () => {
    const options = new ConfigOptions()
    // options.folderName = args[1]
    options.folderName = 'config'
    const app = await NestFactory.create(AppModule.supplyConfiguration(options))
    await app.listen(3000)
}

boostatrap();