const mongoose = require('mongoose');

// SCHEMA
const buyerTemplate = new mongoose.Schema({
  _id: String,
  name: String,
  text: String,
  color: String,
});

// CONNECT TO COLLECTION
const BuyerEntity = mongoose.model('buyers', buyerTemplate);

//EXPORT
module.exports = BuyerEntity;
