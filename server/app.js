import express from 'express';
import dotenv from 'dotenv';
import dbConnect from './config/db.js';

const app = express();
dotenv.config();

dbConnect();

app.listen(process.env.PORT, () => {
  console.log(`Server is running on the PORT ${process.env.PORT}`);
});

//.env
//database connection
//dataconnection function => app.js
