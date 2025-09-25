// src/main.ts
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Add this line to enable global validation
  app.useGlobalPipes(new ValidationPipe());

  await app.listen(4120); // Or your port from .env
}
bootstrap();
