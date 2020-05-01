var btns = document.getElementsByClassName("menubtn");

var i = 0;

for (i = 0; i < btns.length; i++) {
    if ("#" + btns[i].id == window.location.hash) {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        $("#mydiv").load("./pages/" + btns[i].id + ".html");
        btns[i].className += " active";
        break;
    } else if (i == btns.length - 1) {
        $("#mydiv").load("./pages/home.html");
    }
}

for (i = 0; i < btns.length; i++) {

    btns[i].addEventListener("click", function() {

        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
        $("#mydiv").load("./pages/" + this.id + ".html");
        window.location.hash = "#" + this.id;
    });
}




document.getElementById('textanim').innerHTML = " ";
setInterval(replacetext, 100);

var textArray = ["BENVENUTO", "NOVITA'", "SEMPLICE", "MORTE"]
var index = 0;
var direction = false;
var pause = 0;

var blinker = window.document.getElementById("blinkingcursor");

function replacetext() {
    var currentstring = document.getElementById('textanim').innerHTML;

    //se ho raggiunto la fine inizio a cancellare
    if (currentstring.length - 1 == textArray[index].length && direction == false) {
        direction = true;
        pause = 0;
    }
    //aumento lettera per lettera il testo
    if (!direction) {
		//vedo se devo aspettare
        if (ifpause()==true) {
            return;
        }
		
		if(Math.random()*10>8){
			currentstring += textArray[index].charAt(currentstring.length - 1);
		} else {
			currentstring += textArray[index].charAt(currentstring.length - 1);
		}
		
		
    } else {
		//vedo se devo aspettare
        if (ifpause()==true) {
            return;
        }

        currentstring = currentstring.substring(0, currentstring.length - 1);
        //cambio parola
        if (currentstring.length <= 1) {
            direction = false;
            index++;
            pause = 0;
            if (index > textArray.length - 1)
                index = 0;
        }
    }
    document.getElementById('textanim').innerHTML = currentstring
}

function ifpause() {
    if (pause < 30) {
        pause++;
        blinker.className = "blinkeractive";
        return true;
    } else {
        blinker.className = "blinker";
    }
    return false;
}