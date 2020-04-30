$("#mydiv").load("./pages/home.html")

var btns = document.getElementsByClassName("menubtn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
	$("#mydiv").load("./pages/" + this.id +".html")
  });
}