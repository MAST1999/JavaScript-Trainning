/*jslint browser:true*/
/*jslint devel:true*/
/*global
    window, $
*/


$(function () {
    $("#panel").accordion({
        collapsible:true,
        event: "click",
        animate:500,
        active:0,
        heightStyle:true,    /*if one of the panels has a lot more content we 
                            use this to make sure it resizes it self 
                            to look nice with the rest of the panels*/
        icons:{header:"ui-icon-plus", activeHeader:"ui-icon-minus"}
    });
});
