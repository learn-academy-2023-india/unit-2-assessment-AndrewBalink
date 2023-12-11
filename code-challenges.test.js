// ASSESSMENT 2: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multiplied by 3.

// a) Create a test with expect statements for each of the variables provided.

// const numbersArray1 = [6, 7, 8, 9, 10]
// // Expected output: [18, 21, 24, 27, 30]
// const numbersArray2 = [24, 27, 30, 33, 36]
// // Expected output: [72, 81, 90, 99, 108]

// // b) Create the function that makes the test pass.

// // Pseudo code:

// --------------------1) Create a function that takes a object as an argument and decides if the number inside it is evenly divisible by three or not.

// describe("divisibleByThree", () => { 
//     test("returns a string stating whether the number in the object is divisible by three", () => {

//         const object1 = { number: 15 } 
// // expect(divisibleByThree(object1)).toEqual("15 is divisible by three")

//         const object2 = { number: 0 }
// // expect(divisibleByThree(object2)).toEqual("0 is divisible by three")

//         const object3 = { number: -7 }
// // expect(divisibleByThree(object3)).toEqual("-7 is not divisible by three")
//     })
// })

// const divisibleByThree = (obj) => {
//     if (obj.number % 3 === 0) {
//         return `${obj.number} is divisible by three`
//     } else {
//         return `${obj.number} is not divisible by three`
//     }
// }

// a) Create a test with expect statements for each of the variables provided.

// const object1 = { number: 15 }
// // // Expected output: "15 is divisible by three"

// const object2 = { number: 0 }
// // // Expected output: "0 is divisible by three"

// const object3 = { number: -7 }
// // Expected output: "-7 is not divisible by three"

// b) Create the function that makes the test pass.

// // Pseudo code: 1. Create a function named "divisibleByThree" that takes an object as an argument. 2. Inside the function, use an "if" statement to check if the number property of the object is divisible by three. 3. If it is divisible by three, return a string that says the number is divisible by three. 4. If the number is not divisible by three, return a string that says the number is not divisible by three. 



// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.

// const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// // Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
// const randomNouns2 = ["temperature", "database", "chopsticks", "mango"]
// // Expected output: ["Temperature", "Database", "Chopsticks", "Mango"]

// b) Create the function that makes the test pass.

// Pseudo code: 1. Create a function named 'capitalizedWords' that takes an array as an argument. 2. Use the '.map' method to iterate over the array. 3. Use the 'charAt" method to select the first character for each word in the array, and then use the 'toUpperCase' method to capitalize. 4. Use the '.slice' method to select the rest of the word and concatenate it with the capitalized first character. 5. Return a new array. 

// describe("capitalizeWords", () => {
//     test("returns an array with all the words capitalized", () => {
//       const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
//       expect(capitalizeWords(randomNouns1)).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"])
//       const randomNouns2 = ["temperature", "database", "chopsticks", "mango"]
//       expect(capitalizeWords(randomNouns2)).toEqual(["Temperature", "Database", "Chopsticks", "Mango"])
//     })
//   })

//   const capitalizeWords = (array) => {
//     return array.map(word => word.charAt(0).toUpperCase() + word.slice(1))
//   }