import { Module } from '@nestjs/common';
import { HttpModule as AxiosModule } from '@nestjs/axios';

import { AppController } from './example.controller';
import { AppService } from './example.service';

@Module({
  imports: [AxiosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
