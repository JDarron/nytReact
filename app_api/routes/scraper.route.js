const express = require("express");
// CONTROLLER
const ctrl = require("../controllers/scraper.ctrl");
// GRAB AND USE THE EXPRESS ROUTER 
const router = express.Router();

// SCRAPE ROUTE
router.get("/scrape", ctrl.scrapeArticle);

module.exports = router;