import { randomUUID } from 'crypto';
import { AccountProps } from './account-props.type';

export class AccountEntity {
  public readonly id: string;
  public props: Required<AccountProps>;
  private constructor(props: AccountProps, id?: string) {
    this.id = id || randomUUID();
    this.props = {
      ...props,
    };
  }

  static create(props: AccountProps, id?: string): AccountEntity {
    return new AccountEntity(props, id);
  }

  updateName(name: string) {
    this.name = name;
  }

  get name() {
    return this.props.name;
  }

  private set name(value: string) {
    this.props.name = value;
  }

  updateSurname(surname: string) {
    this.surname = surname;
  }

  get surname() {
    return this.props.surname;
  }

  private set surname(value: string) {
    this.props.surname = value;
  }

  updateEmail(email: string) {
    this.email = email;
  }

  get email() {
    return this.props.email;
  }

  private set email(value: string) {
    this.props.email = value;
  }

  updatePassword(password: string) {
    this.password = password;
  }

  get password() {
    return this.props.password;
  }

  private set password(value: string) {
    this.props.password = value;
  }

  toJSON() {
    return {
      id: this.id,
      ...this.props,
    };
  }
}
