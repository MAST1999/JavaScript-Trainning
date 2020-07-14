/*jslint browser:true*/
/*jslint devel:true*/
/*global
    window, $
*/


$(function () {
    $("#div1").sortable({
        opacity: 0.5,
        distance: 50,
        delay: 100,
        containment: "parent"
    });
});
