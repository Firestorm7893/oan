const ScrollMagic = window.ScrollMagic;
const TweenMax = window.TweenMax;
const TweenLite = window.TweenLite;


var controller = new ScrollMagic.Controller();
var tween = TweenMax.to("#logotarget", 1, {backgroundColor: "none", width:"-=300", y:"-=20"});

var tween2 = TweenMax.to("#site-navigation", 1, {height: "-=173"});
var tween3 = TweenMax.to("#menu-menu_list", 1, {y: "-=173"});


var scene = new ScrollMagic.Scene({offset: 0, duration: 200})
										.setTween(tween)
										.addIndicators()
										.addTo(controller);

var scene2 = new ScrollMagic.Scene({offset: 0, duration: 200})
										.setTween(tween2)
										.addIndicators()
										.addTo(controller);
var scene3 = new ScrollMagic.Scene({offset: 0, duration: 200})
										.setTween(tween3)
										.addIndicators()
										.addTo(controller);






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

