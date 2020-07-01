/*jslint browser:true*/
/* jslint devel: true */
function validate() {
    "use strict";
    var sError = "Please enter your ";
    var username = document.getElementById("username");
    var password = document.getElementById("password");
    var pass_border = "";
    var user_border = "";
    document.getElementById("laPassword").style.visibility = "hidden";
    document.getElementById("laUsername").style.visibility = "hidden";
    password.style.border = pass_border;
    username.style.border = user_border;
    if (username.value.trim() === "" && password.value.trim() === "") {
        sError = sError + "Username and Password";
        alert(sError);
        return false;
    }
    if (password.value.trim() === "" || password.value.trim().length < 8) {
        sError = sError + "Password and make it longer than 8 characters";
        pass_border = "solid 3px red";
        document.getElementById("laPassword").style.visibility = "visible";
        alert(sError);

    }
    if (username.value.trim() === "" || username.value.length < 6) {
        sError = sError + "Username and make it longer than 6 characters";
        user_border = "solid 3px red";
        document.getElementById("laUsername").style.visibility = "visible";
        alert(sError);
    }
    password.style.border = pass_border;
    username.style.border = user_border;
    if (pass_border || user_border) {
        return false;
    }
    return true;
}