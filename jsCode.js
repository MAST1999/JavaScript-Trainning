/*jslint browser:true*/
function fnHello() {
    "use strict";
    if (!document.getElementById("pPara")) {
        var elPara1 = document.getElementById("elBody");
        var elPara = document.createElement("p");
        elPara1.appendChild(elPara);
        elPara.id = "pPara";
    }
    document.getElementById("pPara").innerHTML = "Hello ";
    document.getElementById("pPara").innerHTML = document.getElementById("pPara").innerHTML + document.getElementById("tUserInput").value;
}