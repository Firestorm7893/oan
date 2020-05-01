const ScrollMagic = window.ScrollMagic;
const TweenMax = window.TweenMax;
const TweenLite = window.TweenLite;


var controller = new ScrollMagic.Controller();
var tween = TweenMax.to("#logotarget", 1, {backgroundColor: "none", width:"-=300", y:-20, left:"250px"});
var tween2 = TweenMax.to("#site-navigation", 1, {height: "-=173"});
var tween3 = TweenMax.fromTo(".slideover", 1, {y:0, opacity:1}, {y: "-=173", opacity:0});
var tween4 = TweenMax.fromTo(".middlelogo", 1,{width:"300px", y:0, left:"50%"}, {width:"100px", y:-25, left:"220px"});

window.addEventListener("resize", displayWindowSize);
function displayWindowSize(){
	tween.invalidate;
}

var scene = new ScrollMagic.Scene({offset: 0, duration: 200}).setTween(tween).addTo(controller);
var scene2 = new ScrollMagic.Scene({offset: 0, duration: 200}).setTween(tween2).addTo(controller);
var scene3 = new ScrollMagic.Scene({offset: 0, duration: 200}).setTween(tween3).addTo(controller);
var scene4 = new ScrollMagic.Scene({offset: 0, duration: 200}).setTween(tween4).addTo(controller);






var $circle = $('.pupil'), $area = $('#eye');

function moveCircle(e) {
	TweenLite.to($circle, 0.3, {
	  css: {
		left: e.pageX-15,
		top: e.pageY-15
	  }
	});
}


$($area).mouseenter(function(){
	TweenLite.to($circle,0.4,{autoAlpha:1})
	$($area).on('mousemove', moveCircle);
});
$($area).mouseout(function(){
	TweenLite.to($circle,0.4,{autoAlpha:0})
});

