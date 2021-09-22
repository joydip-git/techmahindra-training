const add = (a, b) => a + b

setTimeout(() => {
    console.log('hello')
}, 0)

const someFn = () => {
    const p = new Promise(
        //executor function
        (resolveFnRef, rejectFnRef) => {
            let x = 16
            let y = 0
            let res = x / y
            if (res === Infinity) {
                rejectFnRef('can not divide by zero')
            } else {
                resolveFnRef(res)
            }
        })
    return p;
}
const pResult = someFn()
pResult
    .then(
        (actualOP) => {
            console.log(actualOP)
        },
        (reason) => {
            console.log(reason)
        }
    )

const res = add(10, 20)
console.log(res)