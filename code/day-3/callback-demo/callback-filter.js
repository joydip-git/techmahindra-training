const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
//all even numbers
//all odd numbers

function filterData(source, logicFn) {
    const filtered = []
    for (let i = 0; i < source.length; i++) {
        let status = logicFn(source[i])
        if (status) {
            filtered.push(source[i])
        }
    }
    return filtered
}

//(number)=>boolean
const isEven = function (num) { return num % 2 === 0 }
const isOdd = (num) => num % 2 !== 0

let choice = 1
let result
switch (key) {
    case 1:
        result = filterData(numbers, isEven)
        break;
    case 2:
        result = filterData(numbers, isOdd)
        break;

    default:
        break;
}

console.log(result)