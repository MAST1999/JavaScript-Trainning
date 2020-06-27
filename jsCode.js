function printDay() {
    var day = document.getElementById("day1").value;

    var resultElement = document.createElement("p");
    var body = document.getElementById("body");
    var dayText = document.createTextNode("");
    body.appendChild(resultElement);
    resultElement.appendChild(dayText);
    dayText.nodeValue = "Day is : ";
    var paragraph = document.getElementsByTagName("p");

    switch (Number(day)) {
        case 1:
            var para1 = paragraph[0].innerHTML = "Day is: Saturday";
            break;
        case 2:
            para1 = paragraph[0].innerHTML = "Day is: Sunday";
            break;
        case 3:
            para1 = paragraph[0].innerHTML = "Day is: Monday";
            break;
        case 4:
            para1 = paragraph[0].innerHTML = "Day is: Tuesday";
            break;
        case 5:
            para1 = paragraph[0].innerHTML = "Day is: Wednesday";
            break;
        case 6:
            para1 = paragraph[0].innerHTML = "Day is: Thursday";
            break;
        case 7:
            para1 = paragraph[0].innerHTML = "Day is: Friday";
            break;
    }
    document.getElementById("button").style.visibility = "hidden";
}