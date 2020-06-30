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
    var rad1 = document.getElementById("radAmin");
    var rad2 = document.getElementById("radReza");
    if (rad1.checked === true) {
        document.getElementById("pPara").innerHTML = "The selected name is: " + rad1.value;
    } else if (rad2.checked === true) { /*could have used else*/
        document.getElementById("pPara").innerHTML = "The selected name is: " + rad2.value;
    } else {
        document.getElementById("pPara").innerHTML = "No name selected!";
    }
}