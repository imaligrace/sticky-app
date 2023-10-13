  // ENVIRONMENT FOR SECRETS^^
  require('dotenv').config();

  //IMPORTS
  const mongoose = require('mongoose');
  const express = require('express');
  const helmet = require('helmet');
  const cors = require('cors');
  const router = require('./routes/buyer.router');

  //CONTROLLERS
  const Buyer = require('./controllers/buyer.controller');

  //SERVER
  const server = express(); 
  const port = process.env.PORT || 9000;

  //CONNECT TO MONGO DB
  mongoose
    .connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log('MongoDB Connected');
    })
    .catch((err) => {
      console.error(err);
    });

  //MIDDLEWARES
  server.use(helmet()); 
  server.use(cors());
  server.use(express.json());
  server.use(express.urlencoded({ extended: false }));

  //ROUTERS
  server.use('/api/v1/buyers', router);

  //LISTEN TO PORT
  server.listen(port, () => {
    console.log(`Server is active in PORT: ${port}`);
  });

  module.exports = server; 