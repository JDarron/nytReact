const express = require("express");
// CONTROLLER
const ctrl = require("../controllers/article.ctrl");
// GRAB AND USE THE EXPRESS ROUTER 
const router = express.Router();

// CREATE
router.post("/article", ctrl.createArticle);
// READ
router.get("/article", ctrl.findAllArticle);
// READ
router.get("/article/:id", ctrl.findOneArticle);
// UPDATE
router.put("/article/:id", ctrl.updateArticle);
// DELTE
router.delete("/article/:id", ctrl.deleteArticle);
// END C.R.U.D.

module.exports = router;