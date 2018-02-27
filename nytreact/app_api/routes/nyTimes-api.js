const axios = require("axios");
const router = require("express").Router();

router.get("/article", (req, res) => {
    // TIMES API URL
    const url = "https://api.nytimes.com/svc/archive/v1/2016/1.json";
    const apiKey = "dde781c06452450886e74bef516a660f";
    axios
        .get(url, apiKey)
        .then(results => res.json(results))
        .catch(err => res.status(422).json(err));
});

// var url = "https://api.nytimes.com/svc/archive/v1/2016/1.json";

// $
//     .ajax({
//         url: url, 
//         method: 'GET'})
//     .done(result => {
//         console.log(result);
//     })
//     .fail(err => {
//         throw err;
//     });

module.exports = router;