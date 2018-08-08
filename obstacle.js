class Obstacle{
	constructor(x,y,width,height,angle){
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
		this.angle = angle;
	}

	update(){
		angleMode(DEGREES);
		push();
		translate(this.x,this.y);
		rotate(this.angle);
		rect(0,0,this.width,this.height);
		pop();
	}

}

class Target{
	constructor(x,y,radius){
		this.x = x;
		this.y = y;
		this.radius = radius;
	}

	update(){
		push();
		translate(this.x,this.y);
		ellipse(0,0,this.radius);
	}
}
