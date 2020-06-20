var globalName = "James";
function printName()
{
    var localName = "Honey";    /*If you don't use "var" it won't be local and 
                                will end up being global*/
    document.write(localName);
}

printName();
document.write(globalName);