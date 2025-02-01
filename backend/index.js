import express from 'express';
import mongoose from 'mongoose';
import userRoutes from './routes/userRoutes.js';
import cors from 'cors'

const app = express();

app.use(express.json());

app.use(cors())

const dbUrl = "mongodb+srv://sridharshany2001:BvjmcIXPZ1wQlwTr@cluster0.cu4ho.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

app.use('/api/user', userRoutes);

mongoose.connect(dbUrl)
.then(()=>{
    console.log('Connected to database');
})
.catch((err)=>{
    console.log(err);
})

app.listen(3000, ()=>{
    console.log('Server is running on port 3000');
    console.log('Hello from backend');
})