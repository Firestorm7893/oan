const ScrollMagic = window.ScrollMagic;
const TweenMax = window.TweenMax;
const TweenLite = window.TweenLite;


var controller = new ScrollMagic.Controller();
var tween = TweenMax.to("#logotarget", 1, {backgroundColor: "none", width: "-=300",y: "+=173"});

var scene = new ScrollMagic.Scene({offset: 0, duration: 200})
										.setTween(tween)
										.addTo(controller);

var $circle = $('.pupil'), $area = $('#eye');

function moveCircle(e) {
	TweenLite.to($circle, 0.3, {
	  css: {
		left: e.pageX-15,
		top: e.pageY -200
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

