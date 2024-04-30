var express = require("express");
var router = express.Router();
var controller = require('../controllers/controllers');

router.post('/', function (req, res) {
    controller.postCat(req, res);
});

router.get('/', (req, res) => {
    controller.getAllCats(req, res);
});

router.delete('/', function (req, res) {
    controller.deleteCat(req, res);
});

module.exports = router;
