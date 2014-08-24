var APPROXIMATE_IMAGE_WIDTH = 150;
var APPROXIMATE_IMAGE_HEIGHT = 150;

$(function() {

    var crazyPhoRelatedImages = ['beansprouts.jpg',
        'hoisin.jpg',
        'icecoffee.jpg',
        'minimum.jpg',
        'phospoon.jpg',
        'sriracha.jpg'
    ];
    $.each(crazyPhoRelatedImages, function(i, imageName) {
        var image = document.createElement('img');
        image.src = 'images/' + imageName;
        $(image).addClass('spinning-forever');
        $('body').append(image);
        moveImageToRandomLocation.call({image: image});


    });
});

function moveImageToRandomLocation() {
    console.log(this.image);
    var randomX = ($(window).width() - APPROXIMATE_IMAGE_WIDTH) * Math.random();
    var randomY = ($(window).height() - APPROXIMATE_IMAGE_HEIGHT) * Math.random();
    randomX = Math.max(randomX, APPROXIMATE_IMAGE_WIDTH);
    randomY = Math.max(randomY, APPROXIMATE_IMAGE_WIDTH);
    var orientation = 900 * Math.random();
    var delay = Math.random() * 2000 + 1000;
    $(this.image).transition({translate: [randomX, randomY], rotate: orientation}, delay, $.proxy(moveImageToRandomLocation, this));
}