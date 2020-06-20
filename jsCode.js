var orc = {
    color: "green",
    hair:"red",
    weight: 180,
    height: 5,
    stomachFull: true,
    age: 26,
    yell: function()
    {
        document.write("Orcs are the best!");
    },

    eat: function()
    {
        if(this.stomachFull == true)
        {
            document.write("YUM YUM!");
        } 
        else 
        {
            document.write("Not eating");
        }
        
    }
};

orc.hair = "purple";
orc.hair = 1;
orc.hair2 = "red ";
document.write(orc.hair2);
delete orc.hair2;
document.write(orc.hair2);