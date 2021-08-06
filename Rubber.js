class Rubber{
	constructor(x,y,r)
	{
	// assign options to the rubber ball

	var options={
		restitution:0.3,
		friction:5,
		density:0.5
	}

	this.body=Bodies.circle(x,y,r, options)
	this.r=r
	World.add(world, this.body);

}
	display()
	{
		var rubberpos=this.body.position;		
			push()
			translate(rubberpos.x, rubberpos.y);
			ellipseMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("darkblue");
			//draw the ellipse here to display the rubber ball
             ellipse(0,0, this.r);
			pop()
	}

}