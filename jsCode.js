/*jslint browser:true*/
/*jslint devel:true*/
/*global
    window, $
*/


$(function () {
    $("#resize").resizable({
        maxWidth: 500,
        maxHeight: 500,
        autoHide: true,
        //distance: 200,
        ghost: true,
        aspectRatio: true
    });
});
