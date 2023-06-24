// ...............Problema 1................. 
// const cars = ['Tesla', 'Mercedes', 'Honda']
// const [ Car ] = cars
// const [ , ,otherRandomCar ] = cars
//Predict the output
// console.log(Car) // Tesla...
// console.log(otherRandomCar)// Mercedes...


//............... Problema 2...................
// const employee = {
//     name: 'Elon',
//     age: 47,
//     company: 'Tesla',
// }
// const { name: otherName } = employee;
// const {age : otherAge} = employee
// Predict the output
// console.log(name);
// console.log([otherName, otherAge]);

//................Problema 3...................

// const person = {
//     name: 'Phil Smith',
//     age: 47,
//     height: '6 feet'
// }
// const { password: hashedPassword } = person;  
// const password = '12345';
//Predict the output
// console.log(password);
// console.log(hashedPassword);


// ..............Problema 4 .................
const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers;
const [,,,second] = numbers;
const [,,,,,,,,third] = numbers;
//Predict the output
// console.log([first,second,third]);
// console.log(second);
// console.log(third);

// .............Problema 5..................
const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [ , ,willThisWork] = secondKey;
//Predict the output
console.log(key);
console.log(secondKey);
console.log(secondKey[0]);
console.log(willThisWork);


























// const person = {
//     firstName: "Billy",
//     lastName: "Bob",
//     email: "bbob@email.com",
//     password: "passw0rd!",
//     username: "billyb",
//     addresses: [
//       {
//         address: "1600 Pennsylvania Avenue",
//         city: "Washington, D.C.",
//         zipcode: "20500",
//       },
//       {
//         address: "221B Baker St.",
//         city: "London",
//         zipcode: "WC2N 5DU",
//       },
//     ],
//   };
  
//   const animals = ["horse", "dog", "fish", "cat", "bird"];
  
//   const {firstName, lastName, email, password} = person;
//   console.log([firstName, lastName, email, password]);

//   const { firstName: fName, lastName: lName, email: email2 } = person; // (key: variable) -> Objectives Literals
//     console.log(fName); // Output: John
//     console.log(lName); // Output: Doe
//     console.log(email2); // Output: 30

//     // Destructuring an array with rest operator
// const [firsAnimal, secodAnimal, ...restAnimal] = animals;
// console.log(firsAnimal); // Output: horse
// console.log(secodAnimal); // Output: dog
// console.log(restAnimal); // Output: ['fish', 'cat', 'bird']

// // Skipping Values in Array
// const [ , , thirdAnimal, , fifthAnimal] = animals;
// console.log(thirdAnimal); // Output: fish
// console.log(fifthAnimal); // Output: bird


// // Destructuring nested objects
// const { addresses: [firstAddress, SecondAddress] } = person;

// // Below same as above:
// // const { addresses }= person; -> IDEM: const {addresses: addresses} = person;
// // const [firstAddress, SecondAddress] = addresses;

// console.log(firstAddress); // Output: { address: '1600 Pennsylvania Avenue', city: 'Washington, D.C.', zipcode: '20500' }
// console.log(SecondAddress); // Output: { address: '221B Baker St.', city: 'London', zipcode: 'WC2N 5DU' }


