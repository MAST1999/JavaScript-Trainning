/*jslint browser:true*/
/*jslint devel:true*/

function validate() {
    "use strict";
    var regExper = /^\d{10}$/gi;
    // ^ in the beginning of regExpress means the start.
    // $ in the end means the end of regExpress.
    // var regExper = /[a-r]00/i;
    // var regExper = /[a-r]0[2-6]0[b-g]/i;
    // for excluding var regExper = /[^1abc]0[a-r]0/i;
    // regExper = new RegExper("E00"."i");
    /*
        \d - match any digit (equal to [0-9]);
        \w - match any word character (a-z,A-Z,0-9 & ...);
        \s - match whitespace character (eg - spaces & tabs);
        \t - match a tab only;
    */
   // use () for separating parts of the regExpress (/^(a-z)(\d{2})$/).
   // for . use : \.;
   // you can give range to character : /^[a-z]{2,20}$/ or use /^[a-z]+$/ for one or more;
   // you can use @ or . etc like this /^([a-z]+)@(a-z).(\d)$/;
   // to make a part optional use ? : /^([a-z]+)@(a-z).(\d)?$/;

    var sError = "Please enter your ";
    var phoneNumber = document.getElementById("phoneNumber");
    var password = document.getElementById("password");
    var pass_border = "";
    var user_border = "";
    document.getElementById("laPassword").style.visibility = "hidden";
    document.getElementById("laUsername").style.visibility = "hidden";
    password.style.border = pass_border;
    phoneNumber.style.border = user_border;
    if (phoneNumber.value.trim() === "" && password.value.trim() === "") {
        sError = sError + "PhoneNumber and Password";
        alert(sError);
        return false;
    }
    if (password.value.trim() === "" || password.value.trim().length < 8) {
        sError = sError + "Password and make it longer than 8 characters";
        pass_border = "solid 3px red";
        document.getElementById("laPassword").style.visibility = "visible";
        alert(sError);

    }
    if (phoneNumber.value.trim() === "" || !regExper.test(phoneNumber.value)) {
        sError = sError + "Phone Number and make it 10 numbers";
        user_border = "solid 3px red";
        document.getElementById("laUsername").style.visibility = "visible";
        alert(sError);
    }
    password.style.border = pass_border;
    phoneNumber.style.border = user_border;
    if (pass_border || user_border) {
        return false;
    }
    return true;
}