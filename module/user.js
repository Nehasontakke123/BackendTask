import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },  // changed from 'name' to username for login
  password: { type: String, required: true },  // store hashed password
  email: { type: String },
  mobile: { type: String },
});

export default mongoose.model('User', userSchema);
