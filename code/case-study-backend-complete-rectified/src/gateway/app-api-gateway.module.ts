import { Module } from '@nestjs/common';
import { ProductsApiGatewayController } from './products/products-api-gateway.controller';
import { ProductsApiGatewayService } from './products/products-api-gateway.service';
import { ClientsModule, Transport } from "@nestjs/microservices";
import { ProductsSettingConstants } from 'src/infrastructure/constants/products/products-settings';

@Module({
    imports: [
        ClientsModule.register(
            [
                {
                    name: ProductsSettingConstants.PRODUCTS_CLIENT_PROXY,
                    transport: Transport.RMQ,
                    options: {
                        urls: ['amqps://admrdcap:pLXEEO-vkQ8eiHHDy491uJ0nL7c2U4mA@beaver.rmq.cloudamqp.com/admrdcap'],
                        queue: 'products_service_queue',
                        queueOptions: {
                            durable: false
                        }
                    }
                }
            ]
        )],
    controllers: [ProductsApiGatewayController],
    providers: [
        ProductsApiGatewayService
    ],
})
export class AppApiGatewayModule {
    constructor() {
        console.log('AppApiGatewayModule created')
    }
};