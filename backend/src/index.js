// Берём Express
var express = require('express');

//var favicon = require('serve-favicon');

// Создаём Express-приложение
var app = express();

// HEAD
console.log(__dirname);

//app.use(favicon(__dirname + '/node_modules/serve-favicon/node_modules/msfavicon.ico'));
var phpExpress = require('php-express')({
	binPath: 'php'
	});
app.set('views', '../frontend/dist');
app.engine('php', phpExpress.engine);
app.set('view engine', 'php');

// routing all .php file to php-express
app.all(/.+\.php$/, phpExpress.router);
// 866fc4a1a78733866d3111090d48c5fb5025338c

// Шарим статически папку, куда сборка фронта происходит
app.use(express.static('/home/nadya/Projects/jsLearning/Food_/frontend/dist'));

// Создаём маршрут для главной страницы
// http://localhost:3000/
app.get('/', function(req, res) {
// HEAD
  res.sendFile(__dirname+'/frontend/dist/index.html');
  ///home/nadya/Projects/jsLearning/Food_
//
 // res.sendFile('../frontend/dist/index.html');
// c657339b6459f895a7ae79df19fcd8a311a63c6a
  res.sendFile('index.html', {root: '../frontend/dist'});
});

//app.post('/server.php', function(req, res) {
  //console.log(req.body);
  //res.send('whatsup');
//});

// Запускаем сервер на порту 3000
app.listen(3000, function(error) {
    if (error) {
        console.error("Что-то пошло не так:");
        console.error(error);
        return;
    }
    // Печатаем в стандартный вывод (консоль)
    console.log('Сервер стартовал!');
});
