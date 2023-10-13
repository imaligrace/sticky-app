const express = require('express');
const router = express.Router();
const { v4: uuidv4 } = require('uuid');
const BuyerController = require('../controllers/buyer.controller');

function createCaseInsensitiveName(str) {
  return new RegExp(`^${str}$`, 'i');
}

// CREATE buyer
router.post('/', async (req, res) => {
  try {
    const { name, text, color } = req.body;
    const _id = uuidv4();

    const newBuyer = await BuyerController.createBuyer({
      _id,
      name,
      text,
      color,
    });

    res.status(201).json(newBuyer);
  } catch (error) {
    console.error('Error creating buyer:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// GET list of all buyers
router.get('/', async (req, res) => {
  const { limit, skip } = req.query;

  try {
    const buyers = await BuyerController.getBuyers(
      parseInt(limit),
      parseInt(skip)
    );

    res.status(200).json(buyers);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// GET buyer by name
router.get('/:name', async (req, res) => {
  const { name } = req.params;
  const regexName = createCaseInsensitiveName(name);

  try {
    const buyer = await BuyerController.getBuyerByName(regexName);

    if (!buyer) {
      return res.status(404).json({ message: 'Buyer not found' });
    }

    res.status(200).json(buyer);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// UPDATE buyer task by name
router.put('/:name', async (req, res) => {
  try {
    const { name } = req.params;
    const { text, color } = req.body;

    const updatedBuyer = await BuyerController.updateBuyerByName(name, {
      text,
      color,
    });

    if (!updatedBuyer) {
      return res.status(404).json({ message: 'Buyer not found' });
    }

    res.status(200).json(updatedBuyer);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// DELETE buyer by name
router.delete('/:name', async (req, res) => {
  try {
    const { name } = req.params;
    const regexName = createCaseInsensitiveName(name);

    const isDeleted = await BuyerController.deleteBuyerByName(regexName);

    res.status(200).json({
      message: isDeleted ? 'Buyer deleted' : 'Buyer not found',
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// GET buyer by id
router.get('/id/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const buyer = await BuyerController.getBuyerById(id);

    if (!buyer) {
      return res.status(404).json({ message: 'Buyer not found' });
    }

    res.status(200).json(buyer);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// UPDATE buyer and buyer task by id
router.put('/update/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { text, color } = req.body;

    const updatedBuyer = await BuyerController.updateBuyerById(id, {
      
      text,
      color,
    });

    if (!updatedBuyer) {
      return res.status(404).json({ message: 'Buyer not found' });
    }

    res.status(200).json(updatedBuyer);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// DELETE buyer by id
router.delete('/delete/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const isDeleted = await BuyerController.deleteBuyerById(id);

    res.status(200).json({
      message: isDeleted ? 'Buyer and task deleted' : 'Buyer not found',
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;
