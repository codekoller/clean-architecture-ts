import { DatabaseConfigInterface } from '@app/domain/config/database-config.interface';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class EnvironmentConfigService implements DatabaseConfigInterface {
  constructor(private readonly config: ConfigService) {}

  getDatabaseUri(): string {
    return this.config.get<string>('MONGODB_URI');
  }
}
