var express = require('express');
var router = express.Router();
var quiz = require ('../controllers/quiz');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {title: 'Quiz'});
});

/* GET credits page. */
router.get('/credits', function(req, res, next){
	res.render('credits', {title: 'Autores'} );
});

/* GET quizzes page. */
router.get('/quizzes', quiz.index);


module.exports = router;