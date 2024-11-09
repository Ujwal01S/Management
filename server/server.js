import express from 'express';
import dotenv from 'dotenv';
import color from 'colors';

import ConnectDb from './config/db.js';




dotenv.config();

ConnectDb();
const app = express();



app.use(express.json());







app.get('/', (req, res) => {
    res.send('<h1>ODD Management System');
});


const PORT = 8080;


app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`.bgCyan.white);
});

