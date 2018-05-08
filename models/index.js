const path = require('path');
// Load ORM
const Sequelize = require('sequelize');
// To use SQLite data base:
//    DATABASE_URL = sqlite:quiz.sqlite
const url = "sqlite:quizzes.sqlite";
const options = ({logging: false, operatorsAliases:false});
const sequelize = new Sequelize(url, options);
// Import the definition of the Quiz Table from quiz.js
const Quiz = sequelize.import(path.join(__dirname, 'quiz'));

sequelize.sync()
.then(() => sequelize.models.Quiz.count())
.then(count => {
    if(count===0){
        return (
            sequelize.models.Quiz.bulkCreate([
                {question:"Capital de Italia", answer:"Roma"},
                {question:"Capital de Francia", answer:"París"},
                {question:"Capital de España", answer:"Madrid"},
                {question:"Capital de Portugal", answer:"Lisboa"}
            ])
            .then(c => console.log(` La base de datos ha sido creada con ${c.length} elementos `))
        )
    } else {
        return console.log(` La base de datos existe. `);
    }
})
.catch(error => {
    console.log(error);
});


exports.Quiz = Quiz;
module.exports = sequelize;