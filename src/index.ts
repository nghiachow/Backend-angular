require('dotenv').config()
import express, { Application, Request, Response } from 'express';
import mongoose from 'mongoose'
import http from 'http'
import { userRouter } from '../Route/user';
import cors from 'cors'
import { AuthRouter } from '../Route/Auth';
import { CategoryRouter } from '../Route/category';
import { brandRouter } from '../Route/brand';
import { ProductRouter } from '../Route/product';
const app: Application = express();
const server = http.createServer(app)
app.use(cors())
app.use(express.json())
app.use(express.static('Public'))
const PORT = 5050;

//Create connection
const connectDB = async () =>{
    try {
        await mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@angularbe.ventr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`)
        console.log('DB connected')
    } catch (error) {
        console.log(`Errors: ${error}`)
    }
}
connectDB()
app.use('/',AuthRouter)
app.use('/users', userRouter)
app.use('/category', CategoryRouter)
app.use('/brand', brandRouter)
app.use('/product', ProductRouter)

server.listen(PORT, ()=> console.log(`Server is running on ${PORT}`));
