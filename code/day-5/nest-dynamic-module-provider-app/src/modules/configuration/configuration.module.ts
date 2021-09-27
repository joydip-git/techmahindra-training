import { DynamicModule, Module } from '@nestjs/common';
import { Constants } from 'src/constants';
import { ConfigOptions } from './configoptions.model';
import { ConfigurationService } from './configuration.service';

//const x = new ConfigurationService('config')
@Module({
    // providers: [ConfigurationService],
    providers: [
        {
            provide: Constants.CONFIG_OPTIONS,
            useValue: 'config'
            // useExisting: x
        },
        ConfigurationService
    ],
    exports: [ConfigurationService]
})
export class ConfigurationModule {

};
// export class ConfigurationModule {
//     static register(options?: ConfigOptions): DynamicModule {
//         return {
//             module: ConfigurationModule,
//             providers: [{
//                 provide: Constants.CONFIG_OPTIONS,
//                 useValue: options
//             },
//                 ConfigurationService
//                 // {
//                 //     provide: ConfigurationService,
//                 //     useClass: ConfigurationService
//                 // }
//             ],
//             exports: [ConfigurationService]
//         }
//     }
// };