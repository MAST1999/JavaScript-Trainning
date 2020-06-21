function changeStyle()
{
    var paragraph = document.getElementsByTagName("p");
    for (var i =0; i<paragraph.length; i++)
    {
        var changeParaText = paragraph[i].style.fontFamily = "CaskaydiaCove Nerd Font";
    }
}