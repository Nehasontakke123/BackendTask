import Admin from '../module/admin.js';
import jwt from 'jsonwebtoken';

export const adminRegister = async (req, res) => {
  const { username, password } = req.body;

  const existingAdmin = await Admin.findOne({ username });
  if (existingAdmin) return res.status(400).json({ error: 'Admin already exists' });

  const newAdmin = new Admin({ username, password });
  await newAdmin.save();

  res.json({ message: 'Admin registered successfully' });
};
export const adminLogin = async (req, res) => {
  const { username, password } = req.body;

  const admin = await Admin.findOne({ username });
  if (!admin) return res.status(401).json({ error: 'Invalid credentials' });

  const isMatch = await admin.matchPassword(password);
  if (!isMatch) return res.status(401).json({ error: 'Invalid credentials' });

  const token = jwt.sign({ adminId: admin._id }, process.env.PRIVATEKEY, { expiresIn: '1h' });

  res.json({ message: 'Login successful', token });
};
