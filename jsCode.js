/*jslint browser:true*/
/*jslint devel:true*/
/*global
    window, $
*/

$(document).ready(function () {
    "use strict";
    function fn1() {
        //$("h2").fadeToggle(250); the selection is the same as CSS!
        //$("#secondDiv,li").fadeToggle(250);
        //$("div > ul").fadeToggle(250); //$("div p").fadeToggle(250); works the same! same as CSS!
        //$(".divs").fadeToggle(250);
        $("p:first").fadeOut(250); // same can be done with classes.
        $("li:even").fadeOut(250); // even li's fade!
    }
    function fn2() {
        $("p:first").fadeIn(250);
        $("li:even").fadeIn(250);
    }
    $("#btnClick").dblclick(fn1);
    // $("#btnClick").mouseenter(fn1);
    // $("#btnClick").mouseleave(fn2);
    $("#btnClick").hover(fn1, fn2);
});
