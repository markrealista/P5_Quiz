var express = require('express');
var router = express.Router();
var quizControl = require ('../controllers/quiz_controller');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {title: 'Quiz'});
});

router.get('/credits', function(req, res, next){
	res.render('credits');
});

router.get('/quizzes', quizControl.index);


module.exports = router;