import { model, Schema } from "mongoose";
const ProductSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    images:{
        type: [String],
    },
    brand: {
        type: String,
        require: true
    },
    category: {
        required: true,
        type: String
    },
    saled: {
        type: Number,
        default: 0
    },
    quantity: {
        type: Number,
    },
    saleOf: {
        type: Number,
        default: 0
    },
    status:{
        type: String,
    },
    createAt: {
        type: Date,
        default: Date.now
    },
})
const Product = model('Product', ProductSchema)


export default Product