/*jslint browser:true*/
/*jslint devel:true*/
/*global
    window, $
*/

$(document).ready(function (){
    function fn1(){
        //$("#p1").text("hello world");
        //alert($("#p1").html());
        //$("#p1").html("this is <strong>my bad<strong/>");
        //alert($("#div1").attr("id"));
        alert($("#div1").css("font-size"));
    }
    $("#btnClick1").click(fn1);
});