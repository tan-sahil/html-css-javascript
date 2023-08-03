// doing the exercise .. to convert to JSON

const skills = ['HTML', 'CSS', 'JS', 'React','Node', 'Python']

// const object = skills.reduce((acc, cur) => ({...acc, [cur] : cur}) ,{}

// )
// console.log(object);

const obj = skills.reduce((skill, newSkill) => ({...skill, [newSkill] :newSkill}), {})
console.log(obj)
// const newObject = JSON.stringify(object, undefined, 4);
// console.log(newObject);
// const arrayJson = JSON.stringify(skills, ((key, value, index)=>{
//     return key = value 
// }), 4);
// console.log(arrayJson)

// // stringify age VAriable;
// let age = 250;
// let ageJson = JSON.stringify(age, undefined, 4);
// console.log(ageJson)


// // using string method

// const student = {
//     firstName:'Asabeneh',
//     lastName:'Yetayehe',
//     age:250,
//     isMarried:true,
//     skills:['HTML', 'CSS', 'JS', 'React','Node', 'Python', ]
//   }
//  // used filter method to stringify what is required. from whole value..
//   const studentStringify = JSON.stringify(student, (['firstName', 'lastName', 'skills']), 4);
//   console.log(studentStringify)
// // parsing txt to object

// const txt =` {
//     "Alex": {
//         "email": "alex@alex.com",
//         "skills": [
//             "HTML",
//             "CSS",
//             "JavaScript"
//         ],
//         "age": 20,
//         "isLoggedIn": false,
//         "points": 30
//     },
//     "Asab": {
//         "email": "asab@asab.com",
//         "skills": [
//             "HTML",
//             "CSS",
//             "JavaScript",
//             "Redux",
//             "MongoDB",
//             "Express",
//             "React",
//             "Node"
//         ],
//         "age": 25,
//         "isLoggedIn": false,
//         "points": 50
//     },
//     "Brook": {
//         "email": "daniel@daniel.com",
//         "skills": [
//             "HTML",
//             "CSS",
//             "JavaScript",
//             "React",
//             "Redux"
//         ],
//         "age": 30,
//         "isLoggedIn": true,
//         "points": 50
//     },
//     "Daniel": {
//         "email": "daniel@alex.com",
//         "skills": [
//             "HTML",
//             "CSS",
//             "JavaScript",
//             "Python"
//         ],
//         "age": 20,
//         "isLoggedIn": false,
//         "points": 40
//     },
//     "John": {
//         "email": "john@john.com",
//         "skills": [
//             "HTML",
//             "CSS",
//             "JavaScript",
//             "React",
//             "Redux",
//             "Node.js"
//         ],
//         "age": 20,
//         "isLoggedIn": true,
//         "points": 50
//     },
//     "Thomas": {
//         "email": "thomas@thomas.com",
//         "skills": [
//             "HTML",
//             "CSS",
//             "JavaScript",
//             "React"
//         ],
//         "age": 20,
//         "isLoggedIn": false,
//         "points": 40
//     },
//     "Paul": {
//         "email": "paul@paul.com",
//         "skills": [
//             "HTML",
//             "CSS",
//             "JavaScript",
//             "MongoDB",
//             "Express",
//             "React",
//             "Node"
//         ],
//         "age": 20,
//         "isLoggedIn": false,
//         "points": 40
//     }
// }
// `
// const newText = JSON.parse(txt)
// console.log(newText)

// console.log(newText)
// const size = []
// for(const person in newText){
//     size[person] = newText[person].skills.length
// }
    
    

// console.log(size);
// function findMaxValue(arr) {
//     let max = -Infinity;
//     let person = '';
  
//     for (let i = 0; i < arr.length; i++) {
//       const entry = arr[i];
//       const name = Object.keys(entry)[0];
//       const value = Object.values(entry)[0];
  
//       if (value > max) {
//         max = value;
//         person = name;
//       }
//     }
  
//     return { name: person, value: max };
//   }
//   let maxData = findMaxValue(size)

//   console.log(maxData)