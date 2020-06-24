function changeStyle() {
    var confirmation = confirm("These changes are final!")
    if (confirmation == true) {
        var paragraph = document.getElementsByClassName("para1");

        var firstParagraph = paragraph[0].innerHTML;
        var secondParagraph = paragraph[1].innerHTML;
        var addThem = paragraph[2].innerHTML = firstParagraph + secondParagraph;

        var firstParagraph = paragraph[0].innerHTML = "";
        var secondParagraph = paragraph[1].innerHTML = "";
        document.getElementById("button").style.visibility = "hidden";
    }

}