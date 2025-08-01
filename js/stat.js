'use strict';

var CLOUD_WIDTH = 450;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var FONT_GAP = 15;
var TEXT_WIDTH = 50;
var BAR_WIDTH = 40;
var BAR_GAP = 50;
var BAR_MAX_HEIGHT = 150;

var renderCloud = function(ctx, x, y, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function(arr) {
    var maxElement = arr[0];

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > maxElement) {
            maxElement = arr[i];
        }
    }
    return maxElement;

};

window.renderStatistics = function(ctx, players, times) {

    renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0,0,0,0.5)');
    renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

    ctx.font = "16px PT Mono";
    ctx.fillStyle = "rgba(236, 124, 0, 1)";
    ctx.textBaseline = 'hanging';
    ctx.fillText('Ура!! Вы победили!', CLOUD_X + 20, CLOUD_Y + 20);
    ctx.fillText('Список результатов:', CLOUD_X + 20, CLOUD_Y + 40);

    //ctx.fillStyle('#fff')
    var players = ['я', 'иришка', 'алеша', 'бешка'];
    var times = [1200, 104, 900, 2500]
    var maxTime = getMaxElement(times);
    var histogramBaseY = CLOUD_Y + 80;

    for (var i = 0; i < players.length; i++) {
        var columnHeight = (BAR_MAX_HEIGHT * times[i]) / maxTime;     
        // Выбор цвета
        if (players[i] === 'я') {
            ctx.fillStyle = 'rgba(236, 124, 0, 1)';
        } else {
            var saturation = 0.3 + (times[i]/maxTime); // Насыщенность увеличивается для каждого следующего игрока
            ctx.fillStyle = 'rgba(0, 80, 255, ' + saturation + ')'; // Синий цвет
        }

        // Отрисовка столбца
        ctx.fillRect(
            CLOUD_X + TEXT_WIDTH + (BAR_WIDTH + BAR_GAP) * i,
            histogramBaseY + BAR_MAX_HEIGHT - columnHeight,
            BAR_WIDTH,
            columnHeight
        );
        
        // Подпись времени (над столбцом)
        ctx.fillStyle = "rgb(0, 80, 255)";
        ctx.fillText(
            Math.round(times[i]),
            CLOUD_X + TEXT_WIDTH + (BAR_WIDTH + BAR_GAP) * i,
            histogramBaseY + BAR_MAX_HEIGHT - columnHeight - 20
        );
        
        // Подпись имени (под столбцом)
        ctx.fillText(
            players[i],
            CLOUD_X + TEXT_WIDTH + (BAR_WIDTH + BAR_GAP) * i,
            histogramBaseY + BAR_MAX_HEIGHT + 10
        );
    };


};

