import { Request, Response} from 'express';
import Product from '../Model/product'

export class ProductController {
    public static addProduct = async (req:Request,res:Response) => {
        const {brandId} = req.params
        try {
            const {name, price, images, saled, quantity, saleOf, status} = req.body
            await Product.create({
                name: name,
                price: price, 
                images: images,
                brand: brandId,
                saled: saled,
                quantity: quantity,
                saleOf: saleOf,
                status: status
            })
            return res.status(200).json({
                success: true,
                message: 'Add new Product successfully'
            })
        } catch (error) {
            return res.json({
                err: error,
                success: false,
                message: 'Add new Product failed'
            })
        }
    }
    public static updateProduct = async (req: Request, res: Response) => {
        const {id} = req.params
        const {name, price, images, brand, saled, quantity, saleOf, status} = req.body
        try {
            await Product.findByIdAndUpdate(id,{
                name: name,
                price: price, 
                images: images,
                brand: brand,
                saled: saled,
                quantity: quantity,
                saleOf: saleOf,
                status: status
            })    
            return res.status(200).json({
                success: true,
                message: 'Update Product successfully'
            })
        } catch (error) {
            return res.json({
                err: error,
                success: false,
                message: 'Update Product failed'
            })
        }
    }                            
    public static getProduct = async (req: Request,res: Response) => {
        const {productId} = req.params
        try {
            const detail = await Product.findById(productId)
            res.status(200).json({
                success: true,
                message: 'Get Product detail successfully',
                data: detail
            })
        } catch (error) {
            res.json({
                err: error,
                success: false,
                message:'Get Product detail failed'
            })
        }
    }
    public static getProductByBrand = async (req: Request, res: Response) => {
        const {brandId} = req.params
        try {
            const products = await Product.find({brand:brandId})
            res.status(200).json({
                success: true,
                message: 'Get products by brand successfully',
                data: products
            })
        } catch (error) {
            res.json({
                err: error,
                success: false,
                message: 'Get products by task failed'
            })
        }
    }
    public static deleteProduct = async (req: Request, res: Response) => {
        const {id} = req.params
        try {
            await Product.findByIdAndDelete(id)
            return res.status(200).json({
                success: true,
                message: 'product deleted!'
            })
        } catch (error) {
            return res.json({
                err: error,
                success: false,
                message: 'product deleted failed'
            })
        }
    }
}
