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

var textArray = ["BENVENUTO", "NOVITA'", "SEMPLICE", "MORTE"];
var index = 0;
var direction = false;
var pause = 0;
var waittime = 30;

var blinker = window.document.getElementById("blinkingcursor");

var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

var correction = false;

function replacetext() {
    var currentstring = document.getElementById('textanim').innerHTML;

	if (correction) {
        waittime = 5;
        if (ifpause() == true) {
            return;
        }

        currentstring = currentstring.substring(0, currentstring.length - 1);
        document.getElementById('textanim').innerHTML = currentstring
        correction = false;
		waittime = 2;
		pause =0;
    }
	
	if (currentstring.length>0 && currentstring.charAt(currentstring.length-1) != textArray[index].charAt(currentstring.length-1)) {
            pause = 0;
            correction = true;
            return;
    }

    //se ho raggiunto la fine inizio a cancellare
    if (currentstring.length == textArray[index].length && direction == false) {
        direction = true;
        pause = 0;
		waittime=30;
    }
    //aumento lettera per lettera il testo
    if (!direction) {
        //vedo se devo aspettare
        if (ifpause() == true) {
            return;
        }


		var rand = Math.random() * 10;
		
        if (rand>8.9) {
            currentstring += characters.charAt(Math.floor(Math.random() * (characters.length)));
        } else {
            currentstring += textArray[index].charAt(currentstring.length);
			//console.log(rand + textArray[index].charAt(currentstring.length) + " " + currentstring.length);
        }


    } else {
        //vedo se devo aspettare
        if (ifpause() == true) {
            return;
        }

        currentstring = currentstring.substring(0, currentstring.length - 1);
        //cambio parola
        if (currentstring.length < 1) {
            direction = false;
            index++;
            pause = 0;
            if (index > textArray.length - 1)
                index = 0;
			waittime=20;
        }
    }
    document.getElementById('textanim').innerHTML = currentstring
}

function ifpause() {
    if (pause < waittime) {
        pause++;
        blinker.className = "blinkeractive";
        return true;
    } else {
        blinker.className = "blinker";
    }
    return false;
}