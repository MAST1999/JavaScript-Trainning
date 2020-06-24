function validateTextbox()
{
    var box = document.getElementById("name");
    var box2 = document.getElementById("address");
    
    if (box.value.length < 5 || box2.value.length < 5)
    {
        alert("The fields marked in red cannot be blank or less than 5 characters.");
    }
    
    if (box.value.length < 5)
    {
        box.style.border = "solid 3px red";
        box.focus();
    }

    if (box2.value.length < 5)
    {
        box2.style.border = "solid 3px red";
    }

    if (box.value.length < 5 || box2.value.length < 5)
    {
        return false;
    }
}