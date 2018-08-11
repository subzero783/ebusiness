var express = require('express');
var router = express.Router();
var email = require('emailjs');

//Make a secure file for sending email
var server = email.server.connect({
	user: "ADD USERNAME",
	password: "ADD PASSWORD",
	host: "smtp.gmail.com",
	port: 465,
	ssl: true
});

router.get('/contact', function(req, res) {
  res.render('contact', {
    pageTitle: 'Contact',
    pageID: 'contact'
  });

});

server.send({
   text:    "i hope this works", 
   from:    "you <gusta9753@gmail.com>", 
   to:      "someone <gusta9753@gmail.com>",
   cc:      "",
   subject: "testing emailjs"
}, function(err, message) { console.log(err || message); });

module.exports = router;
