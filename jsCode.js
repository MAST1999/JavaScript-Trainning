/*jslint browser:true*/
/*jslint devel:true*/
/*global
    window, $
*/

$(document).ready(function () {
    function fn1() {
        //$("#p1").text("hello world");
        //alert($("#p1").html());
        //$("#p1").html("this is <strong>my bad<strong/>");
        //alert($("#div1").attr("id"));
        $("#p1").css("font-size", "30px");
    /*this can be done with attr as well*/
        $("#div1").attr("class", "divClass1");
        $("#div1").css("border", "solid 3px blue");
    }
    function fn2() {
        alert($("#p1").css("font-size"));
        alert($("#div1").attr("class"));
    }

    $("#btnClick1").click(fn1);
    $("#btnClick2").click(fn2);
});