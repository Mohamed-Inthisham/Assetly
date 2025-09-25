// src/database/database.module.ts
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      // We still need ConfigModule to be imported here to be able to inject ConfigService
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        uri: configService.get<string>('MONGO_URI'),
        // The following options are no longer needed in recent versions of Mongoose
        // but are safe to keep for compatibility.
        // useNewUrlParser: true,
        // useUnifiedTopology: true,
      }),
    }),
  ],
  // We export MongooseModule to make it available to any other module that imports the DatabaseModule
  exports: [MongooseModule],
})
export class DatabaseModule {}
