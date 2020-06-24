function validateTextbox()
{
    var box = document.getElementById("name");
    var box2 = document.getElementById("address");
    if (box.value == "" || box2.value == "")
    {
        box.style.backgroundColor = "red";
        box2.style.backgroundColor = "red";
        alert("The fields marked in red cannot be blank.");
        return false;
    }
}