const numbers = [1, 2, 3, 4, 5]
const copyNumbers = [...numbers]

// for (let index = 0; index < numbers.length; index++) {
//     const element = numbers[index];
//     copyNumbers.push(element)
// }
// console.log(copyNumbers)

const anilPerson = {
    id: 1,
    name: 'anil'
}

//using Object.assign(target,source)

//const copyOfAnil = {}
//Object.assign(copyOfAnil, anilPerson)

//manual
// copyOfAnil.name = anilPerson.name
// copyOfAnil['id'] = anilPerson.id

// for (const propName in anilPerson) {
//     const propValue = anilPerson[propName]
//     console.log(`${propName}:${propValue}`)
//     copyOfAnil[propName] = propValue
// }

//ES6: spread operator
const copyOfAnil = { ...anilPerson }

console.log(copyOfAnil)

const numbers1 = [1, 2, 3, 4]
const numbers2 = [5, 6, 7, 8]
const final = [99, ...numbers1, 10, 20, ...numbers2]
console.log(final)

const oldObject = {
    id: 1,
    username: 'joy_user',
    email: 'joy@gmail.com',
    password: 'Joy@123'
}
const updatedObject = {
    email: 'joydip@gmail.com'
}

const commitableObject = {
    ...oldObject,
    ...updatedObject
}
console.log(commitableObject)