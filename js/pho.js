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
        var top = $(window).height() * Math.random();
        var left = $(window).width() * Math.random();
        $(image).css('top', top);
        $(image).css('left', left);
        $(image).animate({
            top: '+=300',
            left: '+=300'
        }, 5000, function() {

        });
    });
});