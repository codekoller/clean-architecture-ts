import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { EnvironmentConfigService } from '../environment-config/environment-config.service';

export const getMongooseModuleOptions = (
  config: EnvironmentConfigService,
): { uri: string } => ({
  uri: config.getDatabaseUri(),
});

@Module({
  imports: [
    MongooseModule.forRootAsync({
      imports: [EnvironmentConfigService],
      inject: [EnvironmentConfigService],
      useFactory: getMongooseModuleOptions,
    }),
  ],
})
export class MongooseConfigModule {}
