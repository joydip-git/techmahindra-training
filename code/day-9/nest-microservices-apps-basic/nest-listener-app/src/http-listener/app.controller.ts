import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import * as fs from 'fs'

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {
    console.log('app controller created')
  }

  @Get('/all')
  all(): any {
    return JSON.parse(fs.readFileSync('./src/data/data.json', { encoding: 'utf-8' }))
  }
}
