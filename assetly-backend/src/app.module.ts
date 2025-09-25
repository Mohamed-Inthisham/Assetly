// src/app.module.ts
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from 'src/database/database.module';
import { UsersModule } from './modules/users/users.module';

@Module({
  imports: [
    // Global Config Module
    ConfigModule.forRoot({ isGlobal: true }),

    // Dedicated module for our database connection
    DatabaseModule,

    // Your feature modules
    UsersModule,
  ],
})
export class AppModule {}
