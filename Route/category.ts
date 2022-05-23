import express from 'express';
import { Router } from 'express';
import { CategoryController } from '../Controller/category';

export const CategoryRouter: Router = express.Router();

CategoryRouter.get('/',CategoryController.getAllCategory)
CategoryRouter.post('/',CategoryController.addCategory)
CategoryRouter.put('/:CategoryId',CategoryController.updateCategory) 
CategoryRouter.delete('/:CategoryId',CategoryController.deleteCategory)
CategoryRouter.get("/:CategoryId",CategoryController.getCategory)
