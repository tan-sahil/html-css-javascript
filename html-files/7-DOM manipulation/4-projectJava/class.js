// using classes properties to make it work;

// class Person{
//     constructor(
//         firstName = "john",
//         lastName = " cena",
//         age = 23,
//         occupation ="coding",
//         city ="delhi",
//         score = 0, 
//         skills = []

//     ){
//         this.firstName = firstName
//         this.lastName = lastName
//         this.age = age
//         this.occupation = occupation
//         this.city = city
//         this.score = score
//         this.skills = skills
        
//         }
//         getFullName(){
//             return this.firstName + " " + this.lastName          
//             }
//         getScore(){
//             return this.score
//         }
//         get getSkills(){
//             return this.skills
//         }

//         // setting values.. 
//         set setName(name){
//             this.firstName = name
//         }

//         set setScore(score){
//         this.score += score
//        }
//        set setSkills(skill){
//         this.skills.push(skill)
//        }
    
// }

// let person1 = new Person();

// let person2 = new Person("Ray", "Sterio", 24, "Game Design", "chandigarh" );

// console.log(person1);

// console.log(person2);

// person1.setSkills = 'HTML'
// person1.setSkills = 'CSS'
// person1.setSkills = 'JavaScript'
// let person3 = person2.getFullName();
// console.log((person3));

// person2.setScore = 2
// person1.setScore = 4
// console.log(person1.getSkills)

// console.log(person1.getFullName())
// person1.setName = "David Jacko" 
// console.log(person1.getFullName())

// console.log(person2.score);

// console.log(person1.score);
// class Person{
//     constructor(
//         firstName = "john",
//         lastName = "cena",
//         age = 35, 
//         city = "San-Deigo",
//         country = "USA",
//         score = 0,
//         skills = []

//     ){
//         this.firstName = firstName
//         this.lastName = lastName
//         this.age = age
//         this.city = city
//         this.country = country
//         this.score = score
//         this.skills = skills
//     }

//     getFullName(){
//         return `${this.firstName} ${this.lastName}`
//     }
//     get getskill(){
//         return this.skills
//     }
//     get getScore(){
//         return this.score
//     }

//     //setter

//     set setScore(score){
//         this.score += score
//     }
//     set setSkills(skill) {
//         this.skills.push(skill)
//     }

//     getFullInfo(){
//         let fullName = this.getFullName()
//         let skill = this.skills.length> 0 &&  this.skills.slice(0, this.skills.length -1).join(',') + ` cls
//         and ${this.skills[
//             this.skills.length-1]}`
//         let filteredSkills = skill? `He knows ${skill}` : ""
//         let info = `${fullName} is ${this.age} years old and ${filteredSkills}`
//         return info;
//     }
// }
//  const person1 = new Person();
//  const person2 = new Person("Ray", "sterio", 36, "delhi", "india")

//  console.log(person2.getScore);
//  person1.setScore = 3

//  person1.setSkills ="HTML"
//  person1.setSkills = "JAVA SCRIPT"
//  person1.setSkills = "CSS"

//  console.log(person1.getScore)
//  console.log(person1.getskill)

// console.log(person1.getFullInfo());

class Person{
    constructor(firstName, lastName, age, city, country){
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.city = city
        this.country = country
        this.score = 0
        this.skills = []

    }

    getFullName(){
        return `${this.firstName} ${this.lastName}`
    }

    // getter methods
    get getScore (){
        return this.score
    }
    get getSkills(){
        return this.skills
    }
    //setter methods
    set setScore(score){
        this.score += score
    }
    set setSkills(skill){
        this.skills.push(skill)
    }
    // using static method

    static favriotSkill(){
        const skills = ["HTML", "CSS", "JS", "NEXT.JS" ,"REACT", "MONGODB", "EXPRESS", ]
        const index = Math.floor(Math.random() * skills.length)
        return skills[index]

    }

    static showDateTime(){
        let now = new Date();
        
        let year = now.getFullYear();
        let month = now.getMonth() + 1;
        let date = now.getDate();
        let  hours = now.getHours();
        let minutes = now.getMinutes()

        if(hours < 10){
            hours = '0' + hours
        }
        if(minutes < 10){
            minutes = '0' + minutes
        }

        const todayDay = `${date}:${month}:${year}`

        const time = `${hours}:${minutes}`

        const fullTime = `${time}  ${todayDay}`
        return fullTime
    }
}


console.log(Person.favriotSkill())
console.log(Person.showDateTime())