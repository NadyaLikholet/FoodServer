// Берём Express
var express = require('express');

// Создаём Express-приложение
var app = express();

// Шарим статически папку, куда сборка фронта происходит
app.use(express.static('../frontend/dist'));

// Создаём маршрут для главной страницы
// http://localhost:3000/
app.get('/', function(req, res) {
  res.sendFile('../frontend/dist/index.html');
});

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
