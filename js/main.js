
//Delayed Foreword
window.onload = function () {
    var theDelay = 5;
    setTimeout(showText, theDelay * 1000);
};

function showText() {
    document.getElementById("delayedForeword").style.visibility = "visible";
}