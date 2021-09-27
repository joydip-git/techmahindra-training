import * as path from 'path';
import * as dotenv from 'dotenv'
import { readFileSync } from 'fs';
import { Inject, Injectable, Optional } from '@nestjs/common';
import { Constants } from 'src/constants';

import { EnvConfig } from './envconfig.model';
import { ConfigOptions } from './configoptions.model';

@Injectable()
export class ConfigurationService {

    private fileConfig: EnvConfig;

    constructor(@Optional() @Inject(Constants.CONFIG_OPTIONS) options?: ConfigOptions) {
        console.log('created')
        const fileName = `${Constants.DEVELOPMENT || process.env.NODE_ENV}.env`
        const filePath = path.resolve(
            __dirname,
            '../../../',
            options.folderName,
            fileName
        )
        console.log(filePath)
        const data = readFileSync(filePath)
        this.fileConfig = dotenv.parse(data)
    }

    get(key: string): string {
        return this.fileConfig[key];
    }
}