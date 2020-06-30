/*jslint browser:true*/
function printDay() {
    "use strict";
    var body = document.getElementById("body");
    if (!document.getElementById("para")) {
        var resultElement = document.createElement("p");
        resultElement.id = "para";
        body.appendChild(resultElement);
    }
    var day = document.getElementById("day1").value;

    switch (Number(day)) {
    case 1:
        document.getElementById("para").innerHTML = "Day is: Saturday";
        break;
    case 2:
        document.getElementById("para").innerHTML = "Day is: Sunday";
        break;
    case 3:
        document.getElementById("para").innerHTML = "Day is: Monday";
        break;
    case 4:
        document.getElementById("para").innerHTML = "Day is: Tuesday";
        break;
    case 5:
        document.getElementById("para").innerHTML = "Day is: Wednesday";
        break;
    case 6:
        document.getElementById("para").innerHTML = "Day is: Thursday";
        break;
    case 7:
        document.getElementById("para").innerHTML = "Day is: Friday";
        break;
    }

}
