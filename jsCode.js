function printDay() {
    var body = document.getElementById("body");
    if (!document.getElementById("para")) {
        var resultElement = document.createElement("p");
        resultElement.id = "para";
        body.appendChild(resultElement);
    }
    var day = document.getElementById("day1").value;
    var dayText = document.createTextNode("");

    var paragraph = document.getElementById("para");

    switch (Number(day)) {
        case 1:
            var para1 = document.getElementById("para").innerHTML = "Day is: Saturday";
            break;
        case 2:
            para1 = document.getElementById("para").innerHTML = "Day is: Sunday";
            break;
        case 3:
            para1 = document.getElementById("para").innerHTML = "Day is: Monday";
            break;
        case 4:
            para1 = document.getElementById("para").innerHTML = "Day is: Tuesday";
            break;
        case 5:
            para1 = document.getElementById("para").innerHTML = "Day is: Wednesday";
            break;
        case 6:
            para1 = document.getElementById("para").innerHTML = "Day is: Thursday";
            break;
        case 7:
            para1 = document.getElementById("para").innerHTML = "Day is: Friday";
            break;
    }

}