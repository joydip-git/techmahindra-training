import * as path from 'path';
import * as dotenv from 'dotenv'
import { readFileSync } from 'fs';
import { EnvConfig } from './envconfig.model';
import { Inject, Injectable, Optional, Scope } from '@nestjs/common';
import { Constants } from 'src/constants';
import { ConfigOptions } from './configoptions.model';

//@Injectable()
export class ConfigurationService {
    private fileConfig: EnvConfig;
    // constructor(@Optional() @Inject(Constants.CONFIG_OPTIONS) options?: ConfigOptions) {
    constructor(@Inject(Constants.CONFIG_OPTIONS) foldername?: string) {
        //constructor() {
        console.log('created')
        //console.log(options)
        const fileName = `${Constants.DEVELOPMENT || process.env.NODE_ENV}.env`
        const filePath = path.resolve(
            __dirname,
            '../../../',
            foldername,
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