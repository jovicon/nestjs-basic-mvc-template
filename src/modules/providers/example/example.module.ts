import { Module } from '@nestjs/common';
import { AppController } from './example.controller';
import { AppService } from './example.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
