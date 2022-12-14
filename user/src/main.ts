import { NestFactory } from '@nestjs/core';
import { TcpOptions, Transport } from '@nestjs/microservices';
import { ConfigService } from './services/config/config.service';
import { UserModule } from './user.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(UserModule,{
    transport: Transport.TCP,
    options: {
      host: '127.0.0.1',
      port: new ConfigService().get("port"),
    }
  } as TcpOptions)
  await app.listen();
}
bootstrap();
