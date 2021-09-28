import { Injectable } from '@nestjs/common';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as dotenv from 'dotenv'
import { User } from '../entities/user.entity';

dotenv.config()
type envConfigType = {
    [key: string]: string | undefined
}

export class ConfigService {
    private static svc: ConfigService;
    static create() {
        if (!this.svc) {
            this.svc = new ConfigService(process.env)
        }
        return this.svc
    }
    private constructor(private env: envConfigType) {
        console.log('svc created')
    }
    private getValue(key: string, throwOnMissing = true): string {
        const value = this.env[key]
        if (!value && throwOnMissing) {
            throw new Error(`config error - missing env.${key}`)
        }

        return value
    }
    public getTypeOrmConfig(): TypeOrmModuleOptions {
        return {
            type: 'postgres',
            host: this.getValue('POSTGRES_HOST'),
            port: parseInt(this.getValue('POSTGRES_PORT')),
            username: this.getValue('POSTGRES_USERNAME'),
            password: this.getValue('POSTGRES_PASSWORD'),
            database: this.getValue('POSTGRES_DATABASE'),
            entities: [User],
            //'dist/infrastructure/entities/*.entity{.ts|.js}'
            migrationsTableName: 'migrartion',
            migrations: ['src/migration/*.ts'],
            cli: {
                migrationsDir: 'src/migration'
            }
        }
    }
    public getPort() {
        return this.getValue('PORT', true)
    }
    public isProduction() {
        const mode = this.getValue('MODE', false)
        return mode != 'DEV'
    }
    public ensureValues(keys: string[]) {
        keys.forEach(k => this.getValue(k, true))
        return this
    }
}
