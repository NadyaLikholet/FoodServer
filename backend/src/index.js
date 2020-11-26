// Берём Express
var express = require('express');

// Создаём Express-приложение
var app = express();

var phpExpress = require('php-express')({
	binPath: 'php'
	});
app.set('views', '../frontend/dist')
app.engine('php', phpExpress.engine);
app.set('view engine', 'php')

// routing all .php file to php-express
app.all(/.+\.php$/, phpExpress.router);

// Шарим статически папку, куда сборка фронта происходит
app.use(express.static('../frontend/dist'));

// Создаём маршрут для главной страницы
// http://localhost:3000/
app.get('/', function(req, res) {
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
