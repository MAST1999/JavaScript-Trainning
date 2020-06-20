function batting(player, distance)
{
    if(distance <= 350 && distance > 0)
    {
        document.write("Steve hits the ball");
    }else if(distance > 0){

        document.write("Steve struck out");

    }else{
        document.write("Steve hits home run");
    }
}

batting("steve", 9)