/*jslint browser:true*/
/*jslint devel:true*/
/*global
    window, $
*/


$(function () {
    $("#img1").tooltip({
        track: true,
        content: "TVs are expensive",
        show:{
            effect:"bounce", duration:900 //other effect's consists of "explode", "blind"
        },
        hide: {
            effect: "blind", duration: 900
        }
    });
});
