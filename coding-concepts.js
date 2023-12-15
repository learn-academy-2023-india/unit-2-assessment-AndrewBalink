// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain WHY your initial answer was correct or incorrect.
// There is no need to change any of the code.

// --------------------1) What will this log?

// const cohort = "India 2023"
// console.log(cohort.split(" "))

// a) Your answer: I think this will log ["I", "n", "d", "i", "a", " ", "2", "0", "2", "3"] 
// b) Verify and explain: This logs ['India', '2023'] because the "split" method is used to split a string into an array of substrings based on a specified seperator. For this scenario, the seperator is a space character (""). 'cohort.split("") splits the string "India 2023" into an array using the space character as a delimiter. Each word in the original array string becomes a seperate element in the array. 

// --------------------2) What will this log?

// const greeter = (name) => {
//   `Hello, ${name}!`
// }
// console.log(greeter("LEARN Student"))

// a) Your answer: This will log "Hello, LEARN Student!"
// b) Verify and explain: This logs undefined because it is missing a 'return' statement in the function. Adding 'return' in front of `Hello, ${name}!` on line 23 will correct the code. 

// --------------------3) What will this log?

// const onlyOdds = [11, 12, 13, 14, 15].filter((number) => number % 2 !== 0)
// console.log(onlyOdds)

// a) Your answer: This will log '[11, 13, 15]'
// b) Verify and explain: This logs '[11, 13, 15]' because the code defines an array called 'onlyOdds' by using the filter method to create a new array containing only the elements the provided function returns true. The function checks if each element is odd by using the condition 'number % 2 !== 0'. The new array will only display the odd numbers when logged. 

// --------------------4) What will this log?

// const myCodingSkills = {
//   languages: ["JavaScript", "Ruby"],
//   frameworks: ["React", "Ruby on Rails"],
//   databases: "PostgreSQL",
//   versionControl: "GitHub"
// }
// console.log(myCodingSkills.languages[0])

// a) Your answer: This will log "JavaScript".
// b) Verify and explain: This logs "JavaScript" because it is accessing the first element which is index 0 of the 'languages' array within the 'myCodingSkills' object. 

// --------------------5) What will this log?

// class Learn {
//   constructor(name) {
//     this.student = name
//     this.cohort = "India"
//     this.year = 2023
//   }
// }
// const learnStudent = new Learn("George")
// console.log(learnStudent)

// a) Your answer: This will log "Learn {student: 'George', cohort: 'India', year: 2023}"
// b) Verify and explain: This logs "Learn {student: 'George', cohort: 'India', year: 2023}" because the class 'Learn' is defined with a constructor taking the place of the 'name' parameter and initilizes the three properties 'student', 'cohort', and 'year' as instances of the class. The "Learn" class creates an instance with the name "George" and logs the instance to the console. The output then shows the properties of the 'learnStudent' object created from the 'Learn' class. The 'student' property is set to "George", the 'cohort' property is set to "India", and the 'year' property is set to "2023". 
