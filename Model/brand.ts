import { model, Schema } from "mongoose";
const BrandSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    description:{
        type: String
    },
    category: {
        required: true,
        type: String
    },
    icon: {
        type: String
    },
})
const Brand = model('Brand', BrandSchema)


export default Brand