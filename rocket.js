class Rocket {
	constructor(width, height, x, y){
		this.width = width;
		this.height = height;
		this.x = x;
		this.y = y;
		this.position = createVector(x, y);
		this.velocity = createVector();
		this.acceleration = createVector();
		this.dna = new Dna();
		this.count = 0;
    this.alive = true;
    this.fitness = 0;
	}

	update(){
    if(this.alive){
		    this.applyForce(this.dna.genes[count]);
	      this.count++;

		    this.velocity.add(this.acceleration);
        this.position.add(this.velocity);
		    this.acceleration.mult(0);
        this.calcFitness();
        this.detectCollision();
				if(this.fitness>topFitness){
					topFitness = this.fitness;
					bestRocket = this;
				}
    }
	}

	applyForce(force){
		this.acceleration.add(force);
	}

  calcFitness(){
    this.fitness = dist(this.position.x,this.position.y,target.x,target.y);
    this.fitness = (1/this.fitness);
    if(dist(this.position.x,this.position.y,target.x,target.y)<40){
      this.fitness = this.fitness*(lifeSpan/count)*10;
      this.alive = false;
    }
    if(this.fitness>topFitness){
      topFitness = this.fitness;
    }
  }

  detectCollision(){
    var xRight = this.position.x+this.width/2;
    var xLeft = this.position.x-this.width/2;
    var yTop = this.position.y+this.height/2;
    var yBot = this.position.y-this.height/2;
    if(xRight < obstacle1.x+obstacle1.width/2 && xLeft > obstacle1.x-obstacle1.width/2 && yTop >obstacle1.y-obstacle1.height/2 && yBot<obstacle1.y+obstacle1.height/2){
      this.alive = false;
      this.fitness = .01;
    }

    if(this.position.x >windowWidth || this.position.x<0 || this.position.y > windowHeight || this.position.y<0){
      this.alive = false;
			if(this.position.y > windowHeight){
				this.fitness = 0;
			}
			if(this.position.y< windowHeight){
				this.fitness = 0;
			}
			if(this.position.x > windowWidth || this.position.x < 0){
				this.fitness += 1;
			}
    }

		if(this.position.y<obstacle1.y-obstacle1.height/2){
			this.fitness = this.fitness *10;
		}

  }

	show(){
		push();
		fill(255,150);
		translate(this.position.x, this.position.y);
		rotate(this.velocity.heading());
		rect(0,0,this.width,this.height);
		pop();
	}


}
