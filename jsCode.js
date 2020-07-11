/*jslint browser:true*/
/*jslint devel:true*/
/*global
    window, $
*/


$(function () {

    function showMessage() {
        $("#panel").dialog({
            title: "hello",
            draggable: false,
            resizable: false,
            hight: "200px",
            width: "200px",
            modal: true,
            buttons: [
                {
                    text: "Close",
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
            ]
        });
    }
    $("#btnMessage").on("click", showMessage);
});
