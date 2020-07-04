/*jslint browser:true*/
/*jslint devel:true*/
/*global window */

var intervalId = 0;
var opacity = 0;

function fadeIn() {
    "use strict";
    intervalId = setInterval(show, 40);
}
function fadeOut() {
    "use strict";
    intervalId = setInterval(hide, 40);
}
function hide() {
    "use strict";
    var img = document.getElementById("imgTv");
    opacity = Number(window.getComputedStyle(img).getPropertyValue("opacity"));
    if (opacity > 0) {
        opacity -= 0.1;
        img.style.opacity = opacity;
    } else {
        clearInterval(intervalId);
    }
}
function show() {
    "use strict";
    var img = document.getElementById("imgTv");
    opacity = Number(window.getComputedStyle(img).getPropertyValue("opacity"));
    if (opacity < 1) {
        opacity += 0.1;
        img.style.opacity = opacity;
    } else {
        clearInterval(intervalId);
    }
}