//complete this code
class Animal {
	constructor(species){
		this.Species = species
	}
	makeSound(){
		console.log(`the ${this.Species } makes a sound`)
	}
}

class Dog extends Animal {
	super(species)
	bark(){
		console.log("woof")
	}
	
}

class Cat extends Animal {
	super(Species)
	purr(){
		console.log("purr")
	}
}

const myCat = new Cat("Siamese") 
myCat.makeSound()
myCat.pur

const myDog = new Dog("Golden Retriever")
myDog.makeSound()
myDog.bark

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
