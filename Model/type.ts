import { model, Schema } from "mongoose";
const TypeSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    brand:{
        type: String,
        required: true
    },
})
const Type = model('Type', TypeSchema)

export default Type