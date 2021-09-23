//asynchronous operation
// const calculate = function (a, b) {
//     return new Promise(
//         (r1, r2) => {
//             const res = a / b
//             if (res !== Infinity)
//                 r1(res)
//             else
//                 r2('can not divide by zero')
//         }
//     )
// }

const calculate = async function (a, b) {
    const res = a / b
    if (res !== Infinity)
        return (res)
    else
        throw new Error('can not divide by zero')
}

// const promiseObject = calculate(10, 2)
// promiseObject
//     .then(
//         (res) => console.log(res),
//         (e) => console.log(e)
//     )

const callCalculate = async () => {
    try {
        const result = await calculate(10, 2)
        console.log(result)
        // return new Promise(
        //     (r1, r2) => r1(result)
        // )
        return result
    } catch (error) {
        console.log(error)
    }
}
// callCalculate().then(r => console.log(r))


console.log('hello')

