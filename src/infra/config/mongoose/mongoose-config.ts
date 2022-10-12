import { EnvironmentConfigService } from '../environment-config/environment-config.service';

export const getMongooseConfig = (config: EnvironmentConfigService) => ({
  uri: config.getDatabaseUri(),
});
