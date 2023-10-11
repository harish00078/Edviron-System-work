const express = require('express');
const router = express.Router();
const YourModel = require('../models/models');

router.get('/feeheads', async (req, res) => {
  try {
    const data = await feeheads.find();
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

module.exports = router;
