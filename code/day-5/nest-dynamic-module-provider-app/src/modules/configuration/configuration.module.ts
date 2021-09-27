import { DynamicModule, Module } from '@nestjs/common';
import { Constants } from 'src/constants';
import { ConfigOptions } from './configoptions.model';

import { ConfigurationService } from './configuration.service';

@Module({})
export class ConfigurationModule {
    static register(options?: ConfigOptions): DynamicModule {
        return {
            module: ConfigurationModule,
            providers: [
                {
                    provide: Constants.CONFIG_OPTIONS,
                    useValue: options
                },
                ConfigurationService
            ],
            exports: [ConfigurationService]
        }
    }
};
