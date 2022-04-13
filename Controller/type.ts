import { Request, Response, NextFunction} from 'express';
import Category from '../Model/category';
import Brand from '../Model/brand'
import jwt from 'jsonwebtoken'
import Type from '../Model/type'


export class TypeController {
    public static addType = async (req:Request,res:Response) => {
        const {id} = req.params
        try {
            const {name} = req.body
            await Type.create({
                name: name,
                brand: id
            })
            return res.status(200).json({
                success: true,
                message: 'Add new type successfully'
            })
        } catch (error) {
            return res.json({
                err: error,
                success: false,
                message: 'Add new type failed'
            })
        }
    }
    public static updateType = async (req: Request, res: Response) => {
        const {id} = req.params
        const {name, brand} = req.body
        try {
            await Type.findByIdAndUpdate(id,{
                name,
                brand
            })    
            return res.status(200).json({
                success: true,
                message: 'Update type successfully'
            })
        } catch (error) {
            return res.json({
                err: error,
                success: false,
                message: 'Update type failed'
            })
        }
    }                            
    public static getType = async (req: Request,res: Response) => {
        const {brandId, categoryId} = req.params
        try {
            const detail = await Type.findById(brandId)
            res.status(200).json({
                success: true,
                message: 'Get Task brand successfully',
                data: detail
            })
        } catch (error) {
            res.json({
                err: error,
                success: false,
                message:'Get Task brand failed'
            })
        }
    }
    public static getAllType = async (req: Request, res: Response, next: NextFunction) => {
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
