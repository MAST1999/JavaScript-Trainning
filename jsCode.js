/*jslint browser:true*/
/*jslint devel:true*/
/*global
    window, $
*/


$(function () {
    $("#dateInput").datepicker({
        numberOfMonths:1,
        changeYear:true,
        changeMonth:true,
        showWeek:true,
        weekHeader: "WN",
        showOtherMonths:true,
        minDate: new Date(2000,0,1),
        maxDate: new Date(2077,0,4)
    });
});
