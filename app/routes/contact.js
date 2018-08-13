var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var nodeMailer = require('nodemailer');
//var config = require('../../config.json'); 

router.use(bodyParser.urlencoded({extended : false}));
router.use(bodyParser.json());

router.get('/contact', function(req, res) {
  res.render('contact', {
    pageTitle: 'Contact',
    pageID: 'contact'
  });

});

router.post('/contact', function(req, res){

	var message = req.body.message;
	var name = req.body.name;
	var subject = req.body.subject;
	var email = req.body.email;
	
	var transporter = nodeMailer.createTransport({
		host: "smtp.gmail.com",
		port: 465,
		secure: true,  
		auth: {
			user: process.env.GOOGLE_EMAIL, 
			pass: process.env.GOOGLE_PASSWORD
		}
	});
	
	var mailOptions = {
		from:    '"'+ name +'"<'+email+'>', 
		to:      "Gustavo Amezcua <gusta9753@gmail.com>",
		cc:      "",
		html:    "From: "+ email + "<br/>" + message, 
		subject: subject
	};
	
	transporter.sendMail(mailOptions, function(error, info){
		if(error){
			return console.log(error);
		}
		console.log(`Message %s sent %s`, info.messageId, info.response);
		res.json({ sent: 'sent' });
	});
});


module.exports = router;
