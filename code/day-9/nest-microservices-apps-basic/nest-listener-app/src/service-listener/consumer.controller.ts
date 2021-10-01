import { Controller, Get } from '@nestjs/common';
import { EventPattern, MessagePattern } from '@nestjs/microservices';
import * as fs from 'fs'

@Controller()
export class ConsumerController {
    constructor() {
        console.log('consumer controller created')
    }

    //listener methods

    @EventPattern('update_data')
    async hello(data: any) {
        console.log('in hello')
        fs.readFile(
            './src/data/data.json',
            (e, d) => {
                if (e)
                    return

                if (d) {
                    const messages = JSON.parse(d.toString())
                    messages.push(data)
                    fs.writeFile('./src/data/data.json', JSON.stringify(messages), () => {
                        console.log('written')
                    })
                }
            })
    }
    /*
        @MessagePattern('update_data')
        async helloAgain(message: any) {
            console.log('hello')
            console.log(message)
        }
        */
}