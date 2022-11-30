const { Router } = require('express');

const { getAllShipgirls, getShipgirl } = require('../controllers/shipgirls');

const router = Router();

router.route('/')
    .get(getAllShipgirls);

router.route('/:name')
    .get(getShipgirl);

module.exports = router;