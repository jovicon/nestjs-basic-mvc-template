import { Module } from '@nestjs/common';
import { RouterModule } from '@nestjs/core';

import { AppModule } from './core/app.module';
import { AppModule as ExampleModule } from './example/example.module';

import { routes } from './http.routes';

@Module({
  imports: [AppModule, ExampleModule, RouterModule.register(routes)],
})
export class HttpModule {}
