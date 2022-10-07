import { Module } from '@nestjs/common';
import { EnvironmentConfigModule } from './infra/config/environment-config/environment-config.module';
import { LoggerModule } from './infra/logger/logger.module';
import { MongooseConfigModule } from './infra/config/mongoose/mongoose.module';
import { ExceptionsModule } from './presentation/exceptions/exceptions.module';

@Module({
  imports: [EnvironmentConfigModule, LoggerModule, MongooseConfigModule, ExceptionsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
