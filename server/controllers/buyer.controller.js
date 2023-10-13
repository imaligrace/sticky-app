const BuyerEntity = require('../models/buyer.model');

class BuyerController {
  constructor() {}

  // CREATE BUYER
  async createBuyer(buyer) {
    const newBuyer = new BuyerEntity({ ...buyer });
    const savedBuyer = await newBuyer.save();
    return savedBuyer;
  }

  // GET list of all buyers
  async getBuyers(limit = Infinity, skip = 0) {
    const query = BuyerEntity.find().limit(limit).skip(skip);
    return query.exec();
  }

  // GET buyer by name
  async getBuyerByName(name) {
    return BuyerEntity.findOne({ name });
  }

  // UPDATE buyer task by name
  async updateBuyerByName(name, buyerData) {
    const updatedBuyer = await BuyerEntity.findOneAndUpdate(
      { name },
      buyerData,
      { new: true }
    );
    return updatedBuyer;
  }

  // DELETE buyer by name
  async deleteBuyerByName(name) {
    const deletedBuyer = await BuyerEntity.findOneAndDelete({ name });
    return deletedBuyer !== null;
  }

  // GET buyer by id
  async getBuyerById(id) {
    return BuyerEntity.findById(id);
  }

  // UPDATE buyer and buyer task by id
  async updateBuyerById(id, buyerData) {
    const updatedBuyer = await BuyerEntity.findByIdAndUpdate(id, buyerData, {
      new: true,
    });
    return updatedBuyer;
  }

  // DELETE buyer by id
  async deleteBuyerById(id) {
    const deletedBuyer = await BuyerEntity.findByIdAndDelete(id);
    return deletedBuyer !== null;
  }
}

module.exports = new BuyerController();