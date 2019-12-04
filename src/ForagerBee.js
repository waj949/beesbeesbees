var ForagerBee = function() {
	//  call the Bee superclass
	Bee.call(this);
	this.age = 10;
	this.job =  "find pollen"
	this.canFly = true;
	this.treasureChest = [];
 // a forage method that allows the bee to add a treasure to the treasureChest
};
ForagerBee .prototype = Object.create(Bee.prototype);

ForagerBee .prototype.constructor = ForagerBee ;

ForagerBee .prototype.forage = function(treasure){
	this.treasureChest.push(treasure);
}