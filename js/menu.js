
var btns = document.getElementsByClassName("menubtn");

var i = 0;

alert(window.location.hash);

for(i = 0; i < btns.length; i++){
	
	alert(btns[i].id + " " + window.location.hash);

	if("#" + btns[i].id == window.location.hash){
	
		$("#mydiv").load("./pages/" + btns[i].id +".html");
	} else if(i == btns.length-1){
		
		$("#mydiv").load("./pages/home.html");
	}
}

for (i = 0; i < btns.length; i++) {
	
  btns[i].addEventListener("click", function() {
  
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
	$("#mydiv").load("./pages/" + this.id +".html");
	window.location.hash = "#" + this.id;
  });
}