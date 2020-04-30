$("#mydiv").load("./pages/home.html")


var values = getUrlVars()
for(i = 0; i < values.length; i++){
	alert(values[i]);
}


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

function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}