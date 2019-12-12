import express from "express";
import { connectDB } from "./config/db";
import {router as authRouter} from './routes/auth/users';;
import {router as apiRouter} from './routes/api/data';;

const app = express();

// Connect Database
connectDB();

app.use(express.json({ extended: false }));

// Define Routes
app.use('/auth',authRouter);
app.use('/api',apiRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));
