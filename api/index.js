import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js';
import authRouter from './routes/user.auth.js';
dotenv.config();

mongoose.connect(process.env.MONGO)
.then(()=>{
    console.log('connected the MongoDB!!');
})
.catch((err)=>{
    console.log('ERROR!!');
});
//hPF71xV1dEMAMDcP
//mongoose.connect("mongodb+srv://barpetejii:hPF71xV1dEMAMDcP@cluster14.4vcnmdq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster14")


const app = express();

app.use(express.json());

app.listen(3000,()=>{
    console.log("server is runing on port number 3000!!!");
})


app.use('/api/user',userRouter);
app.use('/api/auth',authRouter);