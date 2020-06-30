/*jslint browser:true*/
function fnHello() {
    "use strict";
    if (!document.getElementById("pPara")) {
        var elBody = document.getElementById("elBody");
        var elPara = document.createElement("p");
        elBody.appendChild(elPara);
        elPara.id = "pPara";
    }
    document.getElementById("pPara").innerHTML = "Hello !";
}