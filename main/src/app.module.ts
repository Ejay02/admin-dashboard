import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductModule } from './product/product.module';
import { config } from 'dotenv';
import { HttpModule } from '@nestjs/axios';
config();

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGODB_URI, {
      autoCreate: true,
    }),
    ProductModule,
    HttpModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
