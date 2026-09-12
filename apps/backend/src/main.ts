import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { backendConfig } from '@workspace/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-member-access
  await app.listen(backendConfig.port);
}
void bootstrap();
