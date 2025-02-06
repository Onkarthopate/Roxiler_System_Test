import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './Config/connect.js'; 
import transactionRouter from './Routes/transactionRoutes.js';
import databaseRoutes from './Routes/databaseRoutes.js';

const app = express(); //intialising express app
app.use(cors());
app.use(express.json()) // allow json parsing

dotenv.config(); // extracting environment variables

connectDB(); // connecting to mongodb atlas

// Middlewares
app.use('/', databaseRoutes) // Database Routes
app.use('/', transactionRouter); //Tranasction Routes


// listening to the port
app.listen(process.env.PORT, ()=> {
    console.log(`Server is run on https://localhost:${process.env.PORT}`)
})