import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import * as morgan from 'morgan'; 

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(morgan('dev'));

  const configService = app.get(ConfigService);

  await app.listen(configService.get('PORT'));

  app.enableCors()

  app.setGlobalPrefix('api/v1');

  console.log('listening on port ' + await configService.get('PORT'));
}
bootstrap();
