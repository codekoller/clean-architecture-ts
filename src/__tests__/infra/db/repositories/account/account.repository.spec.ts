import { AccountProps } from '@app/domain/entities/account/account-props.type';
import { Account } from '@app/domain/entities/account/account.entity';
import { AccountModel } from '@app/infra/db/models/account/account.model';
import { AccountMongoDBRepository } from '@app/infra/db/repositories/account/account-mongodb.repository';
import { getModelToken } from '@nestjs/mongoose';
import { Test } from '@nestjs/testing';
import { randomUUID } from 'crypto';
import { Model } from 'mongoose';

describe('AccountRepository ', () => {
  let accountMongoDbRepository: AccountMongoDBRepository;
  let mockAccountModel: Model<AccountModel>;
  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        {
          provide: getModelToken(AccountModel.name),
          useValue: Model,
        },
        AccountMongoDBRepository,
      ],
    }).compile();

    accountMongoDbRepository = module.get<AccountMongoDBRepository>(
      AccountMongoDBRepository,
    );

    mockAccountModel = module.get<Model<AccountModel>>(
      getModelToken(AccountModel.name),
    );
  });

  it('should be defined accountMongoDbRepository', () => {
    expect(accountMongoDbRepository).toBeDefined();
  });
  it('should be defined accountModel', () => {
    expect(mockAccountModel).toBeDefined();
  });

  it('should be called create with correct params', async () => {
    const accountProps: AccountProps = {
      name: 'any_name',
      surname: 'any_surname',
      email: 'any_email@mail.com',
      password: 'any_password',
    };
    const account = Account.create(accountProps);
    const spy = jest.spyOn(mockAccountModel, 'create').mockReturnValue();
    await accountMongoDbRepository.add(account);
    expect(spy).toBeCalled();
  });

  it('should be called find all accounts', async () => {
    const output = {
      id: 'any_id',
      name: 'any_name',
      surname: 'any_surname',
      email: 'any_email@mail.com',
      password: 'any_password',
      createdAt: new Date('2022-12-10'),
      updatedAt: new Date('2022-12-10'),
    };
    const spy = jest
      .spyOn(mockAccountModel, 'find')
      .mockResolvedValue([output]);
    await accountMongoDbRepository.find();
    expect(spy).toBeCalled();
  });
});
