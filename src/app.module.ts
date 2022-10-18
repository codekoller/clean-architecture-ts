import { Module } from '@nestjs/common';
import { EnvironmentConfigModule } from './infra/config/environment-config/environment-config.module';
import { RepositoriesModule } from './infra/db/repositories/repositories.module';
import { LoggerModule } from './infra/logger/logger.module';
import { ExceptionsModule } from './infra/exceptions/exceptions.module';

@Module({
  imports: [EnvironmentConfigModule, RepositoriesModule, LoggerModule, ExceptionsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
