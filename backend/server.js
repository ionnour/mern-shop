require('dotenv').config({path: `${__dirname}/../config.env`});
const path = require('path');
const express = require('express');
const productsRoutes = require('./routes/productRoutes');

//conect database
const connectDB = require('./config/db');
connectDB();

const app = express();
app.use(express.json());

app.use("/api/products", productsRoutes);

console.log(__dirname,process.env.NODE_ENV    );
if(process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, '../frontend/build')));
  console.log(__dirname);

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend', 'build', 'index.html'));
  });
} else {
  app.get('/', (req, res) => {
    res.send("API running...");
  });
}




//starting server
const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=> console.log(`Server Running on ${PORT} port!!!`));