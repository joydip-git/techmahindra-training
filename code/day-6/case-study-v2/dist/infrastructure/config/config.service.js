"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfigService = void 0;
const dotenv = require("dotenv");
const user_entity_1 = require("../entities/user.entity");
dotenv.config();
class ConfigService {
    constructor(env) {
        this.env = env;
        console.log('svc created');
    }
    static create() {
        if (!this.svc) {
            this.svc = new ConfigService(process.env);
        }
        return this.svc;
    }
    getValue(key, throwOnMissing = true) {
        const value = this.env[key];
        if (!value && throwOnMissing) {
            throw new Error(`config error - missing env.${key}`);
        }
        return value;
    }
    getTypeOrmConfig() {
        return {
            type: 'postgres',
            host: this.getValue('POSTGRES_HOST'),
            port: parseInt(this.getValue('POSTGRES_PORT')),
            username: this.getValue('POSTGRES_USERNAME'),
            password: this.getValue('POSTGRES_PASSWORD'),
            database: this.getValue('POSTGRES_DATABASE'),
            entities: [user_entity_1.User],
            migrationsTableName: 'migrartion',
            migrations: ['src/migration/*.ts'],
            cli: {
                migrationsDir: 'src/migration'
            }
        };
    }
    getPort() {
        return this.getValue('PORT', true);
    }
    isProduction() {
        const mode = this.getValue('MODE', false);
        return mode != 'DEV';
    }
    ensureValues(keys) {
        keys.forEach(k => this.getValue(k, true));
        return this;
    }
}
exports.ConfigService = ConfigService;
//# sourceMappingURL=config.service.js.map