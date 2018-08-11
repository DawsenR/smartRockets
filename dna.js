class Dna{
	constructor(){
		this.randomMutation = random(0,1);
    this.genes = new Array(lifeSpan);

     if(genePool.length > 0){
			 if(loadSaved){
				 this.genes = loadGenes;
			 }else{
				 this.crossOver();
				if(this.randomMutation<= mutationRate){
					this.mutation();
				}
			 }

     }else{
  		this.genes = new Array(lifeSpan);
			if(!loadSaved){
	  		for(var i = 0; i <lifeSpan; i++){
	  			this.genes[i] = p5.Vector.random2D();
	  			this.genes[i].setMag(.25);
				}
			}else{
				for(var i = 0; i <lifeSpan; i++){
					if(i<lifeSpan){
						this.genes[i] = loadGenes;
					}else{
						this.genes[i] = p5.Vector.random2D();
		  			this.genes[i].setMag(.25);
					}

			}
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

	mutation(){
		var randomNum = floor(random(0,lifeSpan));
		for(var i = randomNum; i< lifeSpan; i++){
			this.genes[i] = p5.Vector.random2D();
		}
	}

	serialize(){
			return JSON.stringify(this);
	}



}
