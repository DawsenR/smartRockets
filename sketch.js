
var rocketHeight = 5;
var rocketWidth = 20;
var populationNumber = 500 ;
var lifeSpan = 400;
var count = 0;
var genePool = new Array();
var topFitness = 0;
//var population = new population(populationNumber);

function setup() {
	createCanvas(windowWidth, windowHeight);
	population = new Population(populationNumber);
	obstacle1 = new Obstacle(windowWidth/2,windowHeight/2,windowWidth/2,windowHeight/20,0);
	target = new Target(windowWidth/2,100,50);
	//obstacle2 = new Obstacle(windowWidth/2-windowWidth/4,windowHeight/2,windowWidth/6,windowHeight/30,90);
	rectMode(CENTER);

	//lifeP = createP();
}

function draw() {
	background(0);
	population.run();
	obstacle1.update();
	target.update();
	count++;
	//print(topFitness);
}
