/*jslint browser:true*/
/*jslint devel:true*/
function validate() {
    "use strict";
    var sError = "Please enter your ";
    var username = document.getElementById("username");
    var password = document.getElementById("password");
    if (username.value.trim() === "" && password.value.trim() === "") {
        sError = sError + "Username and Password";
        alert(sError);
        return false;
    } else if (password.value.trim() === "" || password.value.trim().length < 8) {
        sError = sError + "Password and make it longer than 8 characters";
        password.style.border = "solid 3px red";
        document.getElementById("laPassword").style.visibility = "visible";
        alert(sError);
        return false;
    } else if (username.value.trim() === "" || username.value.length < 6) {
        sError = sError + "Username and make it longer than 6 characters";
        username.style.border = "solid 3px red";
        document.getElementById("laUsername").style.visibility = "visible";
        document.getElementById("laPassword").style.visibility = "hidden";
        password.style.border = "";
        alert(sError);
        return false;
    } else {
        password.style.border = "";
        username.style.border = "";
        return true;
    }
}