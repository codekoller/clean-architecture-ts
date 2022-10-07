import { IApplicationConfig } from '@app/domain/config/application-config.interface';
import { IDatabaseConfig } from '@app/domain/config/database-config.interface';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class EnvironmentConfigService
  implements IDatabaseConfig, IApplicationConfig
{
  constructor(private readonly config: ConfigService) {}

  getDatabaseUri(): string {
    return this.config.get<string>('MONGODB_URI');
  }

  getPort(): number {
    return this.config.get<number>('PORT');
  }
}
