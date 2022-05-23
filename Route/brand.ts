import express from 'express';
import { Router } from 'express';
import { BrandController } from '../Controller/brand';

export const brandRouter: Router = express.Router();

brandRouter.get('/all',BrandController.getAllBrand)
brandRouter.get('/:id',BrandController.getBrandByCate)
brandRouter.get('/:cateId/:id',BrandController.getBrand)
brandRouter.post('/:id',BrandController.addBrand)
brandRouter.put('/:id',BrandController.updateBrand)
brandRouter.delete('/:id',BrandController.deleteBrand)
