import { Module } from '@nestjs/common';
import { EnvironmentConfigModule } from './infra/config/environment-config/environment-config.module';
import { RepositoriesModule } from './infra/db/repositories/repositories.module';

@Module({
  imports: [EnvironmentConfigModule, RepositoriesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
