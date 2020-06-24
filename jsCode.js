function validateTextbox()
{
    var box = document.getElementById("name");
    var box2 = document.getElementById("address");
    if (box.value.length < 5 || box2.value.length < 5)
    {
        box.style.backgroundColor = "red";
        box2.style.backgroundColor = "red";
        alert("The fields marked in red cannot be blank or less than 5 characters.");
        return false;
    }
}