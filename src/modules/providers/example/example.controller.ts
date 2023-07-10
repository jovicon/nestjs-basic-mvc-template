import { Controller, Get } from '@nestjs/common';
import { AppService } from './example.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/health')
  getHello(): { ping: string } {
    return this.appService.getHealthCheck();
  }
}