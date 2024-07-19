import mongoose, { Schema } from 'mongoose';
import { IUser as IUserBase } from '@/types/core';
interface IUser extends  IUserBase {
 
}

const UserSchema: Schema<IUser> = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  image: { type: String },
  role: { type: String, enum: ['user', 'admin'], default: 'user' },


},{
  timestamps: true
});

const User = mongoose.models.User || mongoose.model<IUser>('User', UserSchema);

export default User;
