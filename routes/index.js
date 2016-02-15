var express = require('express');
var router = express.Router();

/* Get home page. */
router.get('/', function(req, res, next) {
  res.render('home', { title: 'Orie Hulan' });
});


router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About Me' });
});

router.get('/projects', function(req, res, next) {
	res.render('projects', { title: 'Projects'});
});

router.get('/services', function(req, res, next) {
	res.render('services', { title: 'Services'});
});

router.get('/contact', function(req, res, next) {
	res.render('contact', { title: 'Contact Page'});
});



module.exports = router;


