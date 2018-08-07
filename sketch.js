
var rocketHeight = 5;
var rocketWidth = 20;
var populationNumber = 50;
var lifeSpan = 200;
//var population = new population(populationNumber);

function setup() {
	createCanvas(windowWidth, windowHeight);
	population = new Population(populationNumber);
	rectMode(CENTER);
}

function draw() {
	background(0);
	population.run();
}

class Population{
	constructor(size){
		this.size = size;
		this.rockets = new Array(this.size);
		for(var i = 0; i<this.size;i++){
			this.rockets[i] = new rocket(rocketWidth,rocketHeight, windowWidth/2, windowHeight-rocketHeight+5);
		}
	}

	run(){
		for(var i = 0; i<this.size; i++){
			this.rockets[i].update();
			this.rockets[i].show();
		}
	}
}

class dna{
	constructor(){
		this.genes = new Array(lifeSpan);
		for(var i = 0; i <lifeSpan; i++){
			this.genes[i] = p5.Vector.random2D();
			this.genes[i].setMag(.25);
		}
	}

}

class rocket {
	constructor(width, height, x, y){
		rect(x,y,width,height);
		this.width = width;
		this.height = height;
		this.x = x;
		this.y = y;
		this.position = createVector(x, y);
		this.velocity = createVector();
		this.acceleration = createVector();
		this.dna = new dna();
		this.count = 0;
	}

	update(){
		this.applyForce(this.dna.genes[this.count]);
		this.count++;

		this.velocity.add(this.acceleration);
		this.position.add(this.velocity);
		this.acceleration.mult(0);
	}

	applyForce(force){
		this.acceleration.add(force);
	}

	show(){
		push();
		fill(255,150);
		translate(this.position.x, this.position.y);
		print(this.velocity.heading());
		rotate(this.velocity.heading());
		rect(0,0,this.width,this.height);
		pop();
	}

}
