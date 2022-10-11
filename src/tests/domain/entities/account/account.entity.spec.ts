import { AccountProps } from '@app/domain/entities/account/account-props.type';
import { AccountEntity } from '@app/domain/entities/account/account.entity';

describe('Account Test', () => {
  it('should be constructor()', () => {
    let accountProps: AccountProps = {
      name: 'any_name',
      surname: 'any_surname',
      email: 'any_email@mail.com',
      password: 'any_password',
    };
    let account = AccountEntity.create(accountProps);
    expect(account.props).toStrictEqual({
      ...accountProps,
    });

    accountProps = {
      name: 'any_name',
      surname: 'any_surname',
      email: 'any_email@mail.com',
      password: 'any_password',
    };
    expect(account.id).toBeDefined();
    account = AccountEntity.create(accountProps);
    expect(account.props).toStrictEqual({
      ...accountProps,
    });
  });

  it('should be updateName method', () => {
    let accountProps: AccountProps = {
      name: 'any_name',
      surname: 'any_surname',
      email: 'any_email@mail.com',
      password: 'any_password',
    };
    let account = AccountEntity.create(accountProps);
    account.updateName('any_is_name');
    expect(account.name).toBe('any_is_name');
  });

  it('should be updateSurname method', () => {
    let accountProps: AccountProps = {
      name: 'any_name',
      surname: 'any_surname',
      email: 'any_email@mail.com',
      password: 'any_password',
    };
    let account = AccountEntity.create(accountProps);
    account.updateSurname('any_is_surname');
    expect(account.surname).toBe('any_is_surname');
  });

  it('should be updateEmail method', () => {
    let accountProps: AccountProps = {
      name: 'any_name',
      surname: 'any_surname',
      email: 'any_email@mail.com',
      password: 'any_password',
    };
    let account = AccountEntity.create(accountProps);
    account.updateEmail('any_email_updated@mail.com');
    expect(account.email).toBe('any_email_updated@mail.com');
  });

  it('should be updatePassword method', () => {
    let accountProps: AccountProps = {
      name: 'any_name',
      surname: 'any_surname',
      email: 'any_email@mail.com',
      password: 'any_password',
    };
    let account = AccountEntity.create(accountProps);
    account.updatePassword('any_password_updated');
    expect(account.password).toBe('any_password_updated');
  });

  it('should be toJSON()', () => {
    let accountProps: AccountProps = {
      name: 'any_name',
      surname: 'any_surname',
      email: 'any_email@mail.com',
      password: 'any_password',
    };
    let account = AccountEntity.create(accountProps);
    account.toJSON();
    expect(account.toJSON()).toStrictEqual({
      id: account.id,
      name: 'any_name',
      surname: 'any_surname',
      email: 'any_email@mail.com',
      password: 'any_password',
    });
  });
});
