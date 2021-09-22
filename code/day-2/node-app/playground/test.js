//IIFE (IIFY) -- immediately Invocable Function Expression
const appModule = (
    function call() {
        console.log('welcome to Node')

        const res = add(102, 67)
        console.log(res)
    }
)
//console.log(process)
appModule()
