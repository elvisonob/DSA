var person = {
  age: 28,
  name: 'Max',
  hobbies: ['Sports', 'Cooking'],
};

var thirdPerson = {
  age: 28,
  name: 'Max',
  hobbies: ['Sports', 'Cooking'],
};

console.log(person);

//var secondPerson = person;
var secondPerson = Object.assign({}, person);
console.log('Object Assign', secondPerson);

person.name = 'Chris';

var myHobbies = person.hobbies.slice();

person.hobbies.push('Reading');
console.log(secondPerson);

console.log(thirdPersons);

console.log(myHobbies);
