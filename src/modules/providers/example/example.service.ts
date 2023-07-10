import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHealthCheck(): { ping: string } {
    return {
      ping: 'pong',
    };
  }
}
