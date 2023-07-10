import { Module } from '@nestjs/common';
import { RouterModule } from '@nestjs/core';

import { AppModule } from './core/app.module';
import { routes } from './http.routes';

@Module({
  imports: [AppModule, RouterModule.register(routes)],
})
export class HttpModule {}
