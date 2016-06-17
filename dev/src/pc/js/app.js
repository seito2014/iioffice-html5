require('./module/hack.js');
require('./module/smooth-scroll.js');

var $window = $(window);
var winWidth;
var winHeight;

var fitHero = function(){
    function getData(){
        winWidth = $window.width();
        winHeight = $window.height();
    }
    function setStyle() {
        $('#js-hero').css({
            width: winWidth,
            height: winHeight
        });
    }
    getData();
    setStyle();
};

$window.on('load resize', fitHero);