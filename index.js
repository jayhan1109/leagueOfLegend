import express from 'express';
import {connectDB} from './config/db';

const app = express();

// Connect Database
connectDB();

app.use(express.json({extended:false}));

const PORT = process.env.PORT||5000;

app.listen(PORT,()=>console.log(`Server started on PORT ${PORT}`);
)