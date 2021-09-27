import { DynamicModule, Module } from '@nestjs/common';
import { ConfigOptions } from '../configuration/configoptions.model';
import { ConfigurationModule } from '../configuration/configuration.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({})
export class AppModule {
    static supplyConfiguration(options?: ConfigOptions): DynamicModule {
        return {
            module: AppModule,
            imports: [ConfigurationModule.register(options)],
            controllers: [AppController],
            providers: [AppService],
        }
    }
};