
import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors';           
import connectDB from './db/connection.js';  
import userRoutes from './routes/userRoutes.js';



console.log('JWT_SECRET is:', process.env.JWT_SECRET);  // debug
const app = express();
const port = process.env.PORT || 5000;

// MongoDB connect करा
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Sample user list (जर अजूनही हवे असेल तर)
const nameList = [
  'Neha Sontakke',
  'Ravi Sharma',
  'Priya Deshmukh',
  'Amit Verma',
  'Sonal Patil',
  'Kunal Joshi'
];

// API endpoint to get the list of users (sample)
app.get('/api/users', (req, res) => {
  res.json(nameList);
});

// Hardcoded admin credentials (for demo only!)
const adminUser = {
  username: 'admin',
  password: 'admin123',
};

// Auth routes
app.use('/api/auth', userRoutes);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
