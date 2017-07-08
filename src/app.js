var $ = require('./js/jquery-3.2.0.min')
var GoTop = require('./js/gotop')
var Carousel = require('./js/carousel')
var WaterFall = require('./js/waterfall')


GoTop.init($('body'));
Carousel.init($('.carousel'));
var data = [ {
    src: 'https://github.com/jscgq/webpack_task/blob/master/images/pixar03.jpg?raw=true'
}, {
    src: 'https://github.com/jscgq/webpack_task/blob/master/images/pixar04.jpg?raw=true'
}, {
    src: 'https://github.com/jscgq/webpack_task/blob/master/images/pixar05.jpg?raw=true'
}, {
    src: 'https://github.com/jscgq/webpack_task/blob/master/images/pixar1.jpg?raw=true'
}, {
    src: 'https://github.com/jscgq/webpack_task/blob/master/images/pks.jpg?raw=true'
}, {
    src: 'https://github.com/jscgq/webpack_task/blob/master/images/wali.jpg?raw=true'
}, {
    src: 'https://github.com/jscgq/webpack_task/blob/master/images/img00.jpg?raw=true'
}, {
    src: 'https://github.com/jscgq/webpack_task/blob/master/images/hudi.jpg?raw=true'
}, {
    src: 'https://github.com/jscgq/webpack_task/blob/master/images/img1.jpg?raw=true'
}, {
    src: 'https://github.com/jscgq/webpack_task/blob/master/images/img3.jpg?raw=true'
}, {
    src: 'https://github.com/jscgq/webpack_task/blob/master/images/img2.jpg?raw=true'
}, {
    src: 'https://github.com/jscgq/webpack_task/blob/master/images/img4.jpg?raw=true'
}, {
    src: 'https://github.com/jscgq/webpack_task/blob/master/images/img5.jpg?raw=true'
}, {
    src: 'https://github.com/jscgq/webpack_task/blob/master/images/pixar01.jpg?raw=true'
}]
var index = 0,
    tpl = '';
$('.loadmore').on('click', function() {
    for (var i = 0; i < 3; i++) {
        if (index > 13) {
            index = 0
        }
        tpl += '<li>' + '<img src="' + data[index].src + '"></li>';
        index++
    }
    $('.waterfall-ct').append($(tpl))
    tpl = "";
    $('.waterfall-ct').find('img').on('load', function() {
        WaterFall.init($('.waterfall-ct'));
    })
})