class Population{
	constructor(size){
		this.size = size;
		this.rockets = new Array(this.size);
		for(var i = 0; i<this.size;i++){
			this.rockets[i] = new Rocket(rocketWidth,rocketHeight, windowWidth/2, windowHeight-rocketHeight+5);
		}
	}

	run(){
		for(var i = 0; i<this.size; i++){
      if(this.rockets[i].count > lifeSpan){
        this.rockets[i].alive = false;
      }
      this.rockets[i].update();
      this.rockets[i].show();
		}
	}
}
