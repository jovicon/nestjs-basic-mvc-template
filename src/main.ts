import { NestFactory } from '@nestjs/core';
import { HttpModule } from './modules/providers/http.module';

async function bootstrap() {
  const app = await NestFactory.create(HttpModule);
  await app.listen(3000);
}
bootstrap();
