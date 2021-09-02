class Umbrella {
    constructor(x,y){
        var options = {
            isStatic: true,
        }
        //Write code to load the images

        this.umbrella = Bodies.circle(x,y,50,options);
        this.radius = 50;
        World.add(world, this.umbrella)
    }

    //Write the display function
}