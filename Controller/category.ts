import { Request, Response} from 'express';
import Category from '../Model/category';

export class CategoryController {
    public static addCategory = async (req: Request, res: Response) => {
        try {
            const {name, avatar} = req.body
            await Category.create({
                name,
                avatar
            })
            return res.status(200).json({
                success: true,
                message: 'Add new category successfully'
            })
        } catch (error) {
            return res.json({
                err: error,
                success: false,
                message: 'Add new category false'
            })
        }
    }
    public static updateCategory = async (req: Request, res: Response) => {
        try {
            const {CategoryId} = req.params
            const {name, avatar} = req.body
            await Category.findByIdAndUpdate(CategoryId,{
                name : name,
                avatar : avatar
            })
            res.status(200).json({
                success: true,
                message: 'Update category successfully'
            })
        } catch (error) {
            res.json({
                err: error,
                success: false,
                message: 'Update category failed'
            })
        }
    }
    public static getCategory =async (req: Request, res: Response) => {
        const {CategoryId} = req.params
        try {
            const detail : any = await Category.findById(CategoryId)
            return res.status(200).json({
                success: true,
                message: 'get category detail successfullly',
                data: detail
            })
        } catch (error) {
            res.json({
                err:error,
                success: false,
                message: 'get category detail failed'
            })
        }
    }
    public static deleteCategory = async (req: Request, res: Response) => {
        const {CategoryId} = req.params
        try {
            await Category.findByIdAndDelete(CategoryId)
            return res.status(200).json({
                success: true,
                message: 'Category deleted!'
            })
        } catch (error) {
            return res.json({
                err: error,
                success: false,
                message: 'Category deleted failed'
            })
        }
    }
    public static getAllCategory = async (req: Request, res: Response) => {
        try {
            const categories = await Category.find({})
            return res.status(200).json({
                success: true,
                message: 'Get all category successfully',
                data: categories
            })
        } catch (error) {
            return res.json({
                err: error,
                success: false,
                message:'Get all categories failed'
            })
        }
    }
}