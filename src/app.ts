import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import apiRoutes from './routes/api';
import connectDB from './utils/db';

dotenv.config();

const app = express();

app.use(cors()); // Enable CORS
app.use(express.json());

app.use('/api', apiRoutes);

connectDB();

export default app;
