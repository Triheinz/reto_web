const express = require('express');
const router  = express.Router();
const Phone = require('../models/Phone.model');

router.get("/telefonos", (req,res,next) => {
  Phone.find()
  .then(phones =>res.status(200).json(phones))
  .catch(err =>res.status(500).json(err))
})

module.exports = router;

