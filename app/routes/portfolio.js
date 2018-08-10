var express = require('express');
var router = express.Router();

router.get('/portfolio', function(req, res) {
  res.render('portfolio', {
    pageTitle: 'Portfolio',
    pageID: 'portfolio'
  });

});

module.exports = router;
