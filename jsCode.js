/*jslint browser:true*/
/*jslint devel:true*/
function fnHello() {
    "use strict";
    if (!document.getElementById("pPara")) {
        var elBody = document.getElementById("elBody");
        var elPara = document.createElement("p");
        elBody.appendChild(elPara);
        elPara.id = "pPara";
    }
    // document.getElementById("pPara").innerHTML = "The selected name is: " + document.getElementById("selNames").value;
    var elSelect = document.getElementById("selNames");
    document.getElementById("pPara").innerHTML = "The selected name is: " + elSelect.options[elSelect.selectedIndex].value;
    // my own way was better!!!
}