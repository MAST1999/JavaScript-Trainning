/*jslint browser:true*/
/*jslint devel:true*/
/*global
    window, $
*/


$(function () {
    $(".cube").draggable({
        axis: "x", // or y.
        containment:"parent",
        cursor: "grabbing",
        opacity: 0.5,
        //grid: [300, 300],
        snap: true,
        snapTolerance:30
    });
});
