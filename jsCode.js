/*jslint browser:true*/
/*jslint devel:true*/
/*global
    window, $
*/


$(function () {
    var foods = [
        "sandwich",
        "pizza",
        "bread"
    ];
    $("#foodSelector").autocomplete({
        source: foods //first bracket if for source
    }, {
        autoFocus:true, //the second bracket is for the other things
        delay:500,
        minLength:2
    });

    $("#div2").accordion({
        collapsible: true,
        active: 0
    });

    $("#div3").dialog({
        modal: false,
        width: "400",
        height: "300",
        resizable: false
    });

    function getter() {
        var height = $("#div3").dialog("option", "height"); //getter
        alert(height);
    }
    function setter() {
        $("#div3").dialog("option", "height", "600"); //setter
    }

    $("#btnGet").on("click", getter);
    $("#btnChange").on("click", setter);
    
});
