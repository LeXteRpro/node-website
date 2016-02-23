var express = require('express');
var router = express.Router();

/* Get home page. */
router.get('/', function(req, res, next) {
  res.render('home', { title: 'Orie Hulan' });
});

/* Get About Page */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About Me' });
});

/* Get Projects Page */
router.get('/projects', function(req, res, next) {
	res.render('projects', { title: 'Projects'});
});

/* Get Services Page */
router.get('/services', function(req, res, next) {
	res.render('services', { title: 'Services'});
});

/* Get Contact Page */
router.get('/contact', function(req, res, next) {
	res.render('contact', { title: 'Contact Page'});
});



module.exports = router;


