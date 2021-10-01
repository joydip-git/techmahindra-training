import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, @Inject('HELLO_SERVICE') private client: ClientProxy) { }

  @Post()
  save(@Body() data: any) {
    //publish/fire an event
    this.client.emit('update_data', data)
    //this.client.send('my-key', data)
    return data
  }
}
