// Берём Express
var express = require('express');

//var favicon = require('serve-favicon');

// Создаём Express-приложение
var app = express();

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

// Шарим статически папку, куда сборка фронта происходит
app.use(express.static('/home/nadya/Projects/jsLearning/Food_/frontend/dist'));

// Создаём маршрут для главной страницы
// http://localhost:3000/
app.get('/', function(req, res) {
  //res.sendFile(__dirname+'/frontend/dist/index.html');
  //home/nadya/Projects/jsLearning/Food_
  res.sendFile('index.html', {root: '../frontend/dist'});
});

//app.post('/server.php', function(req, res) {
  console.log(req.body);
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
