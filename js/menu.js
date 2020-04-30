$("#mydiv").load("./pages/home.html")

const queryString = window.location.search;
alert(queryString);



var btns = document.getElementsByClassName("menubtn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
	$("#mydiv").load("./pages/" + this.id +".html");
	  window.location.hash = "#" + this.id;
  });
}