import express from 'express';
import { Router } from 'express';
import { UserController } from '../Controller/user';
import { checkAdminToken, checkToken } from '../middleware/auth';

export const userRouter: Router = express.Router();

userRouter.get('/',UserController.getAllUser)
userRouter.post('/',UserController.userRegister)
userRouter.put('/:userId',UserController.updateUser)
userRouter.delete('/:userId',UserController.deleteUser)
userRouter.get('/:userId',UserController.getUserDetail)
