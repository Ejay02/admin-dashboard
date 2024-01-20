import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { config } from 'dotenv';

config();

async function bootstrap() {
  // Create Microservice
  const microservice =
    await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
      transport: Transport.RMQ,
      options: {
        urls: [process.env.RMQ_URL],
        queue: 'main_queue',
        queueOptions: {
          durable: false,
        },
      },
    });

  await microservice.listen();
  console.log('Microservice is listening...');

  // Create HTTP Server
  const httpServer = await NestFactory.create(AppModule);
  httpServer.setGlobalPrefix('api');
  httpServer.enableCors({
    origin: 'http://localhost:8080',
  });

  await httpServer.listen(8001);
  console.log('HTTP Server is listening on port 8001');
}

bootstrap();
