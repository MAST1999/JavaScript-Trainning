/*jslint browser:true*/
/*jslint devel:true*/
/*global
    window, $
*/

function fn1() {
    "use strict";
    //$("h2").fadeToggle(250); the selection is the same as CSS!
    //$("#secondDiv,li").fadeToggle(250);
    //$("div > ul").fadeToggle(250); //$("div p").fadeToggle(250); works the same! same as CSS!
    //$(".divs").fadeToggle(250);
    $("p:first").fadeToggle(250); // same can be done with classes.
    $("li:even").fadeToggle(250); // even li's fade!
}