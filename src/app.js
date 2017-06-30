var $ = require('./js/jquery-3.2.0.min')
var GoTop = require('./js/gotop')
var Carousel = require('./js/carousel')
var WaterFall = require('./js/waterfall')


GoTop.init($('body'));
Carousel.init($('.carousel'));
var data = [{
    src: 'https://unsplash.it/200/270'
}, {
    src: 'https://unsplash.it/200/330'
}, {
    src: 'https://unsplash.it/200/190'
}, {
    src: 'https://unsplash.it/200/230'
}, {
    src: 'https://unsplash.it/200/350'
}, {
    src: 'https://unsplash.it/200/360'
}, {
    src: 'https://unsplash.it/200/150'
}, {
    src: 'https://unsplash.it/200/210'
}, {
    src: 'https://unsplash.it/200/310'
}, {
    src: 'https://unsplash.it/200/320'
}, {
    src: 'https://unsplash.it/200/130'
}, {
    src: 'https://unsplash.it/200/250'
}, {
    src: 'https://unsplash.it/200/290'
}, {
    src: 'https://unsplash.it/200/170'
}]
var index = 0,
    tpl = '';
$('.loadmore').on('click', function() {
    for (var i = 0; i < 5; i++) {
        if (index > 13) {
            index = 0
        }
        tpl += '<li>' + '<img src="' + data[index].src + '"></li>';
        index++
    }
    $('.waterfall-ct').append($(tpl))
    $('.waterfall-ct').find('img').on('load', function() {
        WaterFall.init($('.waterfall-ct'));
    })
})