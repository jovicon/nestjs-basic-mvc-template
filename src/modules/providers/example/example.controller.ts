import { Controller, Get } from '@nestjs/common';
import { AppService } from './example.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/naruto')
  getHello(): { ping: string } {
    return this.appService.getHealthCheck();
  }
}
