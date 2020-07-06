/*jslint browser:true*/
/*jslint devel:true*/
/*global
    window, $
*/

function fn1() {
    "use strict";
    //$("h2").fadeToggle(250); the selection is the same as CSS!
    $("#elH2").fadeToggle(250);
    $(".someHeadings").fadeToggle(500);
}