function changeStyle()
{
    var paragraph = document.getElementsByClassName("para1");
    
    var firstParagraph = paragraph[0].innerHTML;
    var secondParagraph = paragraph[1].innerHTML;
    var addThem = paragraph[2].innerHTML = firstParagraph + secondParagraph;

    var firstParagraph = paragraph[0].innerHTML = "";
    var secondParagraph = paragraph[1].innerHTML = "";
}