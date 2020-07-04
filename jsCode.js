/*jslint browser:true*/
/*jslint devel:true*/
/*global window */

var id = 0;
var seconds = 0;

function printMessage() {
    "use strict";
    var elColor = document.getElementById("elColor");
    elColor.innerHTML = seconds + " seconds";
    seconds += 1;

}
function start() {
    "use strict";
    // id = window.setTimeout(printMessage, 5000);
    id = window.setInterval(printMessage, 1000);
}
function stop() {
    "use strict";
    //window.clearTimeout(id);
    window.clearInterval(id);
}