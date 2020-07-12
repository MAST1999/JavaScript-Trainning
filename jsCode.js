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
    ]
    $("#foodSelector").autocomplete({
        source: foods //first bracket if for source
    }, {
        autoFocus:true, //the second bracket is for the other things
        delay:500,
        minLength:2
    });
});
