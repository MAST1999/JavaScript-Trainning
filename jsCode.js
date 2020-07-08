/*jslint browser:true*/
/*jslint devel:true*/
/*global
    window, $
*/

$(document).ready(function () {
    "use strict";
    function fn1() {
        //$("#firstDiv").hide();
        $("#div1").fadeToggle(1000,alert1);
        $("#div2").slideUp(10000).slideDown(4000).fadeOut(1200, alert1);
    }
    function alert1() {
        alert("complete");
    }

    $("#btnClick1").click(fn1);
});
