const router = require('express').Router();
const Pet = require('../models/pet');

// Find All
router.get('/', (req, res) => {
  Pet.findAll()
    .then((pets) => {
      if (!pets.length) return res.status(404).send({ err: 'Pet not found' });
      res.send(pets);
    })
    .catch((err) => res.status(500).send(err));
});

// Create new pet document
router.post('/', (req, res) => {
  Pet.create(req.body)
    .then((pet) => res.send(pet))
    .catch((err) => res.status(500).send(err));
});

module.exports = router;
