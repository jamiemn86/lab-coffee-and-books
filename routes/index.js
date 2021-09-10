'use strict';

const { Router } = require('express');
const router = new Router();
const Place = require('../models/place');

router.get('/', (req, res, next) => {
  res.render('index', { title: 'Hello World!' });
});

// GET to render the form to create a new place
router.get('/places/new', (req, res, next) => {
  res.render('places/new');
});

// POST to to create new place and save it to the DB
router.post('/', (req, res, next) => {
  const newPlace = new Place({
    name: req.body.name,
    type: req.body.type
  });

  newPlace.save((error) => {
    if (error) {
      next(error);
    } else {
      res.redirect('/');
    }
  });
});

module.exports = router;
