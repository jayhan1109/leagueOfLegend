import express from "express";
import { connectDB } from "./config/db";
import {router as authRouter} from './routes/auth/users';;

const app = express();

// Connect Database
connectDB();

app.use(express.json({ extended: false }));

// Define Routes
app.use('/auth',authRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));
