/*jslint browser:true*/
/*jslint devel:true*/
/*global
    window, $
*/


$(function () {
    var button = [
        {
            text:"Close",
            icon: "ui-icon-heart",
            click: function () {
                $(this).dialog("close");
            }
        },
        {
            text: "Ok",
            icon: "ui-icon-heart",
            click: function () {
                $(this).dialog("close"); //this is the current selected object.
            }
        }
    ];
    function showMessage() {
        $("#panel").dialog({
            title: "hello",
            draggable: false,
            resizable: false,
            hight: "200px",
            width: "200px",
            modal: true
        });
    }
    $("#btnMessage").on("click", showMessage);
});
