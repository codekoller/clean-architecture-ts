export type AccountOutput = {
  id: string;
  name: string;
  surname: string;
  email: string;
  password: string;
};

export type AccountInput = Omit<AccountOutput, 'id'>;
