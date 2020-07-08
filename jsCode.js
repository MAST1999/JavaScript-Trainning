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
        $("#cube").animate({
            left: "150px",
            opacity: "1",
            height: "100px",
            width: "100px",
            padding: "40px",
            backgroundColor: "red"
        }, 1500);

    }
    $("#btnClick1").click(fn1);
    $("#btnClick2").click(fn2);
    $("#btnClick3").click(fn3);
});
