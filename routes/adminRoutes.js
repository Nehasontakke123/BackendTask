import express from 'express';
import { adminLogin, adminRegister } from '../controllers/adminController.js';
import adminAuth from '../middleware/adminAuth.js';

const router = express.Router();

router.post('/login', adminLogin);
router.get('/users', adminRegister); // Protected

export default router;
