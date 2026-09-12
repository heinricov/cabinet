/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { backendConfig } from '@workspace/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(backendConfig.port);
  console.log(`Backend running on http://localhost:${backendConfig.port}`);
}
void bootstrap();
