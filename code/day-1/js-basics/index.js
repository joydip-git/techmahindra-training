let x = 10
console.log(x)
for (let index = 0; index < 2; index++) {
    let x = 20
    console.log(x)
}
console.log(x)

const numbers = [1, 2, 3, 4]
numbers.push(10)
//numbers = [10, 20]
console.log(numbers)

// const a = 10
// a = 20;
// console.log(a)

function person(id, name, location) {
    this.name = name
    this.id = id
    this.location = location
    this.show = () => {
        return `Name: ${this.name}, Location: ${this.location}`
    }
}

const anilPerson = new person(1, 'anil', 'bangalore')
const sunilPerson = new person(2, 'sunil', 'chennai')

const people = [anilPerson, sunilPerson]

for (let index = 0; index < people.length; index++) {
    const personRef = people[index];
    console.log(personRef.show())
}