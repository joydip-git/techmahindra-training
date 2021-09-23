class Person {
    constructor(id, name) {
        this.id = id
        this.name = name
    }
}

const p1 = new Person(3, 'anil')
const p2 = new Person(1, 'sunil')
const p3 = new Person(2, 'gobi')
const people = [p1, p2, p3]
function sortRepo() {
    for (let i = 0; i < people.length; i++) {
        for (let j = i + 1; j < people.length; j++) {
            let initial = people[i]
            let next = people[j]
            if (initial.name.localeCompare(next.name) > 0) {
                let temp = people[i]
                people[i] = people[j]
                people[j] = temp
            }
        }
    }
}

// sortRepo()
// console.log(people)

const numbers = [1, 4, 3, 5, 2]
function sortNumbers() {
    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            if (numbers[i] > numbers[j]) {
                let temp = numbers[i]
                numbers[i] = numbers[j]
                numbers[j] = temp
            }
        }
    }
}
// sortNumbers()
// console.log(numbers)

/**
 * anil,1
 * gobi,2
 * sunil,3
 */

function sortData(source, comparsionLogic) {
    for (let i = 0; i < source.length; i++) {
        for (let j = i + 1; j < source.length; j++) {
            const res = comparsionLogic(source[i], source[j])
            if (res > 0) {
                let temp = source[i]
                source[i] = source[j]
                source[j] = temp
            }
        }
    }
}

// function sortByNameLogic(p1, p2) {
//     const comparisonRes = p1.name.localeCompare(p2.name)
//     return comparisonRes
// }
// const sortByNameLogic = (p1, p2) => {
//     const comparisonRes = p1.name.localeCompare(p2.name)
//     return comparisonRes
// }
//const sortByNameLogic = (p1, p2) => p1.name.localeCompare(p2.name)

function getPeopleSorted() {
    //sortData(people, sortByNameLogic)
    sortData(people, (p1, p2) => p1.name.localeCompare(p2.name))
    console.log(people)
}
getPeopleSorted()
//people.sort((p1, p2) => p1.name.localeCompare(p2.name))
people.find((p) => p.id)

function sortByNumber(number1, number2) {
    return number1 - number2
}

function getNumbersSorted() {
    sortData(numbers, sortByNumber)
    console.log(numbers)
}
getNumbersSorted()