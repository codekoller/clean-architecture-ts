import { NestFactory } from '@nestjs/core';
import { AppModule } from '@app/app.module';
import { NestExpressApplication } from '@nestjs/platform-express'
import { EnvironmentConfigService } from './infra/config/environment-config/environment-config.service'
import { ConfigService } from '@nestjs/config'

async function bootstrap() {
  
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  const envs = new EnvironmentConfigService(new ConfigService())
  const port = envs.getPort()
  await app.listen(port);
}
bootstrap();
