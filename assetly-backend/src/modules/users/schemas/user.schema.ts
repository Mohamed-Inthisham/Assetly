// src/modules/users/schemas/user.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema({ timestamps: true }) // `timestamps: true` adds `createdAt` and `updatedAt` fields
export class User {
  @Prop({ required: true, unique: true, trim: true })
  email: string;

  @Prop({ required: true })
  passwordHash: string; // We store a hash, not the plain password

  @Prop({ required: true, trim: true })
  firstName: string;

  @Prop({ required: true, trim: true })
  lastName: string;

  @Prop({
    required: true,
    enum: ['Admin', 'Employee'], // Restrict the role to these two values
    default: 'Employee',
  })
  role: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
