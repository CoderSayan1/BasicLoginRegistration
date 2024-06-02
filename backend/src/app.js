import express from 'express'
import cors from 'cors' 
import userRouter from './routers/user.route.js'
import cookieParser from 'cookie-parser'


const app = express()
const origin = process.env.CORS_ORIGIN
// middleware
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use(cors({
    origin: origin,
    credentials: true
}));

// routes
app.use('/api/v1/users', userRouter);

export {app}
