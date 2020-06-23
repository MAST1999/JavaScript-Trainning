function newParagraph() 
{
    //This creates a header.
    var element2 = document.createElement("h2");
    var main = document.getElementById("main");
    main.appendChild(element2);
    var text2 = document.createTextNode("The Battle of Salamis");
    element2.appendChild(text2);

    //This creates a paragraph.
    var element = document.createElement("p");
    main.appendChild(element)
    var text = document.createTextNode("The Battle of Salamis was fought between an alliance of Greek cities and the Persian Empire in 480 BC.  The Greeks decisively defeated the Persian navy.");
    element.appendChild(text);
}

function removeElements() 
{
    var elementH = document.getElementsByTagName("h2")[2];
    var parent = elementH.parentNode;
    parent.removeChild(elementH);

    var elementP = document.getElementsByTagName("p")[4];
    parent.removeChild(elementP);
}
