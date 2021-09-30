import { Body, Controller, Post, UseInterceptors } from '@nestjs/common';
import { Data } from './data';
import { DataInterceptor } from './data.interceptor';

@Controller()
export class AppController {
  constructor() { }

  @UseInterceptors(DataInterceptor)
  @Post()
  getHello(@Body() input: Data): Data {
    console.log(input);
    return input;
  }

  @Post('test')
  save(@Body() input: Data): Data {
    console.log(input);
    return input;
  }
}
