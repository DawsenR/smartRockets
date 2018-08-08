class Dna{
	constructor(){
    this.genes = new Array(lifeSpan);

     if(genePool.length > 0){
       this.crossOver();
     }else{
  		this.genes = new Array(lifeSpan);
  		for(var i = 0; i <lifeSpan; i++){
  			this.genes[i] = p5.Vector.random2D();
  			this.genes[i].setMag(.25);
      }
		}
	}

  crossOver(){
    var mid = random(lifeSpan)
    var parentA = random(genePool);
    var parentB = random(genePool);
    for(var i = 0; i<lifeSpan; i++){
      if(i<mid){
        this.genes[i] = parentA[i];
      }else{
        this.genes[i] = parentB[i];
      }
    }
  }
}
