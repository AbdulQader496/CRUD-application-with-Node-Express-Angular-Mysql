// import  express  from 'express';
// import bodyParser from 'body-parser';
// import contactRoutes from './routes/contactsRoute.js';
// import mysql from 'mysql2';
// import dotenv from 'dotenv';
const express = require('express');
const bodyParser = require('body-parser');
const contactRoutes = require('./routes/contactsRoute.js')
const cors = require('cors')



const app = express();

const PORT = 8000;

app.use(bodyParser.json());

app.use(cors())

// Routes

app.use("/customer", contactRoutes);



// Server PORT

app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));
