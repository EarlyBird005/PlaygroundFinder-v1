const express = require('express');
const router = express.Router();
const Playground = require('../models/Playground');
const { authUser, authorizeAdmin } = require('../middleware/auth');

// Get all playgrounds (public access)
router.get('/', async (req, res) => {
  try {
    const playgrounds = await Playground.find().populate('facilities');
    res.json(playgrounds);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create a new playground (admin only)
router.post('/', authUser, authorizeAdmin, async (req, res) => {
  const { name, location, facilities } = req.body;

  const playground = new Playground({
    name,
    location,
    facilities,
  });

  try {
    const savedPlayground = await playground.save();
    res.status(201).json(savedPlayground);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Update a playground (admin only)
router.put('/:id', authUser, authorizeAdmin, async (req, res) => {
  try {
    const updatedPlayground = await Playground.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updatedPlayground);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete a playground (admin only)
router.delete('/:id', authUser, authorizeAdmin, async (req, res) => {
  try {
    await Playground.findByIdAndDelete(req.params.id);
    res.json({ message: 'Playground deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
