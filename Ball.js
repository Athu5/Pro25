class Ball {

    constructor(x,y,r){

		var options={
			isStatic:false,
            restitution:0.3,
            friction:0,
            density:1.2 
			}

            this.Image = loadImage('paper.png');

       
		this.r=r
        this.body=Bodies.circle(x, y, (this.r-10), options);
 		World.add(world, this.body);
        }
        
        display() {
                
                var paperObject=this.body.position;		

                push()
                translate(paperObject.x, paperObject.y);
                imageMode(CENTER)
              //  fill("white");
               // ellipse(0,0,this.r, this.r);
                image(this.Image,0, 0, this.r*2, this.r*2);
                pop()
        }
    }