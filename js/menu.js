
var btns = document.getElementsByClassName("menubtn");

var i = 0;

for(i = 0; i < btns.length; i++){	
	if("#" + btns[i].id == window.location.hash){
		var current = document.getElementsByClassName("active");
		current[0].className = current[0].className.replace(" active", "");
		$("#mydiv").load("./pages/" + btns[i].id +".html");
		btns[i].className += " active";
		break;
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



document.getElementById('textanim').innerHTML = "";
setInterval(replacetext, 250);

var text = "NOVITA'";

var direction = false;
function replacetext(){
	var currentstring = document.getElementById('textanim').innerHTML;
	console.log(currentstring.length);
	
	if(currentstring.length==text.length){
		direction=true;
	}
	if(!direction){
	currentstring += text.charAt(currentstring.length);
	} else {
		currentstring = currentstring.substring(0,currentstring.length -1);
		if(currentstring.length==0){
			direction=false;
		}
	}
	
	document.getElementById('textanim').innerHTML = currentstring

}

