class Dna{
	constructor(){
		this.genes = new Array(lifeSpan);
		for(var i = 0; i <lifeSpan; i++){
			this.genes[i] = p5.Vector.random2D();
			this.genes[i].setMag(.25);
		}
	}
}
