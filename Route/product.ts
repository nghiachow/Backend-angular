import express from 'express';
import { Router } from 'express';
import { ProductController } from '../Controller/product';

export const ProductRouter: Router = express.Router();

ProductRouter.get('/:brandId/all', ProductController.getProductByBrand)
ProductRouter.get('/:productId', ProductController.getProduct)
ProductRouter.post('/:brandId', ProductController.addProduct)
ProductRouter.put('/:productId', ProductController.updateProduct)
ProductRouter.delete('/:productId', ProductController.deleteProduct)