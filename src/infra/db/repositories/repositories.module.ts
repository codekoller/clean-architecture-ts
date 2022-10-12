import { MongooseConfigModule } from '@app/infra/config/mongoose/mongoose-config.module';
import {
  AccountModel,
  AccountSchema,
} from '@app/infra/db/models/account/account.model';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AccountMongoDBRepository } from './account/account-mongodb.repository';

@Module({
  imports: [
    MongooseConfigModule,
    MongooseModule.forFeature([
      {
        name: AccountModel.name,
        schema: AccountSchema,
      },
    ]),
  ],
  exports: [AccountMongoDBRepository],
  providers: [AccountMongoDBRepository],
})
export class RepositoriesModule {}
