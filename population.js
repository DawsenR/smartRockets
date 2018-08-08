class Population{
	constructor(size){
		this.size = size;
		this.rockets = new Array(this.size);
		for(var i = 0; i<this.size;i++){
			this.rockets[i] = new Rocket(rocketWidth,rocketHeight, windowWidth/2, windowHeight-rocketHeight-50);
		}
	}

	run(){
		for(var i = 0; i<this.size; i++){
      if(count > lifeSpan){
        this.rockets[i].alive = false;
        this.newGeneration();
      }
      this.rockets[i].update();
      this.rockets[i].show();
		}
	}

  createGenePool(){
    for(var i = 0; i<this.size; i++){
      var geneOccurrence = ceil(this.rockets[i].fitness * this.rockets[i].count);
      if(geneOccurrence<75){
        geneOccurrence = 1;
      }
      for(var j = 0; j<geneOccurrence; j++){
        genePool.push(this.rockets[i].dna.genes);
      }
    }
  }

  newGeneration(){
    count = 0;
    this.createGenePool();
    population = new Population(populationNumber);
    //count = 0;
  }
}
