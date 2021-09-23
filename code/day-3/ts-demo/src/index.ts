import { person } from './person'
const anilPerson = new person('anil', 34, new Date(2000, 4, 13))
anilPerson.Age = 23
console.log(anilPerson.Name)
console.log(person.getInfo())

setTimeout(() => {
    console.log('hello')
}, 1000)

// const add = (a, b) => {
//     return a + b
// }