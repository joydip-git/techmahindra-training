import { Module } from '@nestjs/common';
import { ConsumerController } from './consumer.controller';

@Module({
    imports: [],
    controllers: [ConsumerController],
    providers: [],
})
export class ConsumerModule {
    constructor() {
        console.log('consumer module created')
    }
}
