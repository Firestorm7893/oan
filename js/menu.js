
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

var min = 100, max = 1000;
//var cont = 0;


document.getElementById('textanim').innerHTML = "";
//if(cont>=3) {
//	cont = 0;
setInterval(replacetext, Math.random() * (max-min)+min);
//} else {
//	cont++;
	
//	setInterval(replacetext, last);
//}
	
var textArray = ["NOVITA'","SEMPLICE","MORTE"]
var index = 0;

var direction = false;
function replacetext(){
	var currentstring = document.getElementById('textanim').innerHTML;
	
	if(currentstring.length==textArray[index].length){
		direction=true;
	}
	if(!direction){
	currentstring += textArray[index].charAt(currentstring.length);
	} else {
		currentstring = currentstring.substring(0,currentstring.length -1);
		if(currentstring.length==0){
			direction=false;
			index++;
			if(index >textArray.length-1)
					index = 0;
		}
	}
	
	document.getElementById('textanim').innerHTML = currentstring

}

