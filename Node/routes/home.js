const express = require('express');
const router = express.Router();



router.get('/', (req, res) => {
        res.render('index.pug',{title:'my express App',message:'hello sangam'});
});

module.exports = router