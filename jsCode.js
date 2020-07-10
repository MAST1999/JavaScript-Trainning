/*jslint browser:true*/
/*jslint devel:true*/
/*global
    window, $
*/


$(function () {
    function addClass() {
        $("#div1").addClass("divStyled");
    }
    function removeClass() {
        $("#div1").removeClass("divStyled");
    }
    function toggleClass() {
        $("#div1").toggleClass("divStyled pStyled");
    }
    function CSS1() {
        var padding = $("#div1").css("padding-left");
        $("#p2").html(padding);

    }

    $("#btnClick1").on("click", addClass);
    $("#btnClick2").on("click", removeClass);
    $("#btnClick3").on("click", toggleClass);
    $("#btnClick4").on("click", CSS1);
});
