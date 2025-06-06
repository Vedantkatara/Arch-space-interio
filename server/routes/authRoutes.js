
import express from 'express';
import { login, register } from '../controllers/authController.js';


const router = express.Router();
// auth route
router.route('/register').post(register)
router.route('/login').post(login)

export default router;
