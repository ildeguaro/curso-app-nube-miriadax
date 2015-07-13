var express = require('express');
var router = express.Router();
var quizController = require('../controllers/quiz_controller');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Quiz', layout:'layout.ejs' });
});

router.get('/quizes/question/',quizController.question);
router.get('/quizes/answer/',quizController.answer);
router.get('/author',function(req,res){
   res.render('author',{autor:'Ildemaro Medina', linkedIn: 'https://ve.linkedin.com/in/ildemaro'});
});

module.exports = router;
