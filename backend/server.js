require('dotenv').config({path: '../.env'});
const express = require('express');
const productsRoutes = require('./routes/productRoutes');

//conect database
const connectDB = require('./config/db');
connectDB();

const app = express();
app.use(express.json());

app.use("/api/products", productsRoutes);


//starting server
const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=> console.log(`Server Running on ${PORT} port!!!`));