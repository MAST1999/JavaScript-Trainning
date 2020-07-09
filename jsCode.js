/*jslint browser:true*/
/*jslint devel:true*/
/*global
    window, $
*/

$(document).ready(function () {
    function append1() {
        $("#div1").append("<p>Hello world<p/>");
        //$("#btnClick1").css("visibility", "hidden");
        //$("#btnClick1").fadeOut();
    }
    function prepend1() {
        $("#div1").prepend("<p>Hello world<p/>");
    }
    function after1() {
        $("#div1").after("<p>Hello world<p/>");
    }
    function before1() {
        $("#div1").before("<p>Hello world<p/>");
    }
    function remove1() {
        $("p").remove("#p2, #p1");
    }
    function empty1() {
        $("p").empty();
    }

    $("#btnClick1").click(append1);
    $("#btnClick2").click(prepend1);
    $("#btnClick3").click(after1);
    $("#btnClick4").click(before1);
    $("#btnClick5").click(remove1);
    $("#btnClick6").click(empty1);
});