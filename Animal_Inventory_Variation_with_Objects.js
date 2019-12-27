function animalEntry (count,name) {
    let animal = {animalCount: count, animalName : name};
    return animal;
}
//let chicken = animalEntry ()
let animals = [animalEntry(3,"chicken"),
               animalEntry(4,"parrots"),
               animalEntry(10,"monsters")];

function printAnimal (animal) {
    let anString = String(animal.animalCount);
  while (anString.length < 3) {
    anString = "0" + anString;
  }
  console.log (`${anString} ${animal.animalName}`);
}
function printFarmInventory () {
  for (animal of animals) {
      printAnimal (animal);
  }
}
printFarmInventory();


//var person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"}