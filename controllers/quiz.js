//const Sequelize = require("sequelize");
const {models} = require("../models");

// GET/quizzes
exports.index = (req, res, next) => {
    models.quiz.findAll()
    .then(quizzes => {
        res.render('quizzes.ejs', {quizzes})
    })
    .catch(error => next(error));
};