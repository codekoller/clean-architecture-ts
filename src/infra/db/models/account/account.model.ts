import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({
  autoIndex: true,
  collection: 'accounts',
  timestamps: true,
  id: true,
})
export class AccountModel extends Document {
  @Prop({
    type: String,
  })
  id!: string;

  @Prop({
    type: String,
  })
  name: string;

  @Prop({
    type: String,
  })
  surname: string;

  @Prop({
    type: String,
  })
  email: string;

  @Prop({
    type: String,
  })
  password: string;

  @Prop({
    type: Date,
  })
  createdAt: Date;

  @Prop({
    type: Date,
  })
  updatedAt: Date;
}

export const AccountSchema = SchemaFactory.createForClass(AccountModel);
