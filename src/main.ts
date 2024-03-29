import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { WsAdapter } from '@nestjs/platform-ws';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useWebSocketAdapter(new WsAdapter(app));
  await app.listen(3000);
  // console.log(`Application is running on: ${await app.getUrl()}`);
  // const app = await NestFactory.create<NestExpressApplication>(AppModule, {cors: false});
  // app.useStaticAssets(join(__dirname, '..', 'static'));
  // await app.listen(3000);
}
bootstrap();
