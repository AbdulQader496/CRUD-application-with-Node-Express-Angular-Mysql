// import  express  from "express";
// import contactController from '../controllers/contact.controller.js';
// import router from 'express'
const express = require('express');
const contactController = require('../controllers/contact.controller.js');
const router = express.Router();

//this route store new data
router.post("/", contactController.storeData);

// This route get all the data from db
router.get("/", contactController.allData);

// This route get all the data from db
router.get("/:id", contactController.singleData);

//this route update existing data
router.patch("/:id", contactController.updateData);

// this route delete data based on id
router.delete("/:id", contactController.deleteData);

module.exports = router;