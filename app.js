console.log('working');

function chosenKey() {
    var whichkey = event.key;
    if (whichkey == "a") {
        var element = document.getElementById("thediv");
        element.classList.remove("blue", "green", "violet");
        element.classList.add("red");
    }
    if (whichkey == "z") {
        var element = document.getElementById("thediv");
        element.classList.remove("red", "green", "violet");
        element.classList.add("blue");
    }
    if (whichkey == "e") {
        var element = document.getElementById("thediv");
        element.classList.remove("blue", "red", "violet");
        element.classList.add("green");
    }
    if (whichkey == "r") {
        var element = document.getElementById("thediv");
        element.classList.remove("blue", "green", "red");
        element.classList.add("violet");
    }
}


//65

//90

//69

//82
