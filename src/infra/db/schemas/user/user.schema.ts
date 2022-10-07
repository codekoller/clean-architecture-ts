import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { randomUUID } from 'crypto';
import { Document } from 'mongoose';

@Schema({
  collection: 'users',
  autoIndex: true,
  timestamps: true,
})
export class UserModel {
  @Prop({
    type: String,
    required: true,
    default: randomUUID(),
  })
  id!: string;

  @Prop({
    type: String,
    required: true,
  })
  name: string;

  @Prop({
    type: String,
    required: true,
  })
  surname: string;

  @Prop({
    type: String,
    required: true,
    unique: true,
  })
  email: string;

  @Prop({
    type: String,
    required: true,
  })
  password: string;

  @Prop({
    name: 'created_at',
    type: Date,
    required: true,
  })
  createdAt: Date;

  @Prop({
    name: 'updated_at',
    type: Date,
    required: true,
  })
  updatedAt: Date;
}

export const UserSchema = SchemaFactory.createForClass(UserModel);

export type UserDocument = UserModel & Document;
