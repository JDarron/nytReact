const express = require("express");

const ctrl = require("../controllers/article.ctrl");
// GRAB AND USE THE EXPRESS ROUTER 
const router = express.Router();


router.post("/article", ctrl.createArticle);

// router.get("/article", ctrl.findAllArticle);

// router.get("/article/:id", ctrl.findOneArticle);

// router.delete("/article/:id", ctrl.deleteArticle);


module.exports = router;