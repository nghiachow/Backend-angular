import { Request, Response, NextFunction} from 'express';
import Category from '../Model/category';
import Brand from '../Model/brand'
import jwt from 'jsonwebtoken'

export class BrandController {
    public static addBrand = async (req:Request,res:Response) => {
        const {id} = req.params
        try {
            const {name, description, icon} = req.body
            await Brand.create({
                name: name,
                description: description,
                category: id,
                icon: icon,
            })
            return res.status(200).json({
                success: true,
                message: 'Add new Brand successfully'
            })
        } catch (error) {
            return res.json({
                err: error,
                success: false,
                message: 'Add new Brand failed'
            })
        }
    }
    public static updateBrand = async (req: Request, res: Response) => {
        const {id} = req.params
        const {name, description, icon} = req.body
        try {
            await Brand.findByIdAndUpdate(id,{
                name,
                description,
                icon
            })    
            return res.status(200).json({
                success: true,
                message: 'Update Brand successfully'
            })
        } catch (error) {
            return res.json({
                err: error,
                success: false,
                message: 'Update Brand failed'
            })
        }
    }                            
    public static getBrand = async (req: Request,res: Response) => {
        const {cateId} = req.params
        const {id} = req.params
        try {
            const brand = await Brand.findById(id)
            if(brand.category === cateId){
                res.status(200).json({
                    success: true,
                    message: 'Get Brand successfully',
                    data: brand
                })
            }else{
                res.json({
                    success: false,
                    message: 'Wrong category!'
                })
            }
        } catch (error) {
            res.json({
                err: error,
                success: false,
                message:'Get Brand failed'
            })
        }
    }
    public static getAllBrand = async (req: Request, res: Response, next: NextFunction) => {
        const header = req.header('Authorization')
        const jwtSecret = process.env.JWT_SECRET || " "
        const token = header && header.split(' ')[1]
        if (!token) {
            return res.json({
                success: false,
                message: 'Need token'
            })
        }
        try {
            const data = await Brand.find({})
                res.status(200).json({
                    success: true,
                    message: 'get all brands successfully',
                    data: data   
                })
        } catch (error) {
            res.json({
                err: error,
                success: false,
                message: 'get all brands failed'
            })
        }
    }
    public static getBrandByCate = async (req: Request, res: Response) => {
        const {id} = req.params
        try {
            const data = await Brand.find({category:id})
            res.status(200).json({
                success: true,
                message: 'get brands by category successfully',
                data: data
            })
        } catch (error) {
            res.json({
                err: error,
                success: false,
                message: 'get brands by category failed'
            })
        }
    }
    public static deleteBrand = async (req: Request, res: Response) => {
        const {id} = req.params
        try {
            await Brand.findByIdAndDelete(id)
            return res.status(200).json({
                success: true,
                message: 'Brand deleted!'
            })
        } catch (error) {
            return res.json({
                err: error,
                success: false,
                message: 'Brand deleted failed'
            })
        }
    }
}
