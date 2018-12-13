var express = require('express');
var router = express.Router();


router.get('/get', function (req, res) {

    res.send('your get api called successfully');

})






module.exports = router;
