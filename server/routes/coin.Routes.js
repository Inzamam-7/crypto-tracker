const router = require('express').Router();
const {getAllCoins, getCoinHistory} = require("../controllers/coins.Controller.js")


router.get('/coins', getAllCoins);
router.get('/coins/:coinId/history', getCoinHistory)
module.exports = router;