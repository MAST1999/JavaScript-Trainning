/*jslint browser:true*/
/*jslint devel:true*/
/*global
    window, $
*/

$(document).ready(function () {
    "use strict";
    function fn1() {
        //$("#firstDiv").hide();
        $("#firstDiv").slideUp();
    }
    function fn2() {
        //$("#firstDiv").show();
        $("#firstDiv").slideDown();
    }
    function fn3() {
        //$("#firstDiv").toggle();
        $("#firstDiv").slideToggle();
    }
    $("#btnClick1").click(fn1);
    $("#btnClick2").click(fn2);
    $("#btnClick3").click(fn3);
});
