import express from 'express'
import { login, Register } from '../controller/userController.js';

const router = express.Router();
router.post("/Register" , Register)
router.post("/Login" , login)
export default router;