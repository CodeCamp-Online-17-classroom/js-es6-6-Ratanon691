function getInfo(name, lastName, ...hobbies) {
  return {
    name,
    lastName,
    hobbies,
    numberOfHobbies: hobbies.length
  }
}

const personInfo1 = getInfo('Alice', 'Smith', 'Drawing');
console.log(personInfo1);
// { name: 'Alice', lastName: 'Smith', hobbies: ['Drawing'], numberOfHobbies: 1 }

const personInfo2 = getInfo('Bob', 'Johnson', 'Cooking', 'Fishing', 'Gardening');
console.log(personInfo2);
// { name: 'Bob', lastName: 'Johnson', hobbies: ['Cooking', 'Fishing', 'Gardening'], numberOfHobbies: 3 }

const personInfo3 = getInfo('Eve', 'Brown');
console.log(personInfo3);
// { name: 'Eve', lastName: 'Brown', hobbies: [], numberOfHobbies: 0 }
