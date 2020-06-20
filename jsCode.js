var orc = {
    color: "green",
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

var newAge = orc.age + 2;

orc.yell();
orc.eat();
document.write(newAge);