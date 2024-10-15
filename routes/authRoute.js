import express from 'express';
import { loginController, registerController } from '../controllers/authController.js';

//router object
const router = express.Router();

//Routing

//REGISTER THE USER || METHOD POST
router.post('/register', registerController);

// LOGIN THE USER || METHOD POST
router.post('/login', loginController);

export default router;