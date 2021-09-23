const calculate = async function (a, b) {
    const res = a / b
    if (res != Infinity)
        return (res)
    else
        throw new Error('can not divide by zero')
}
    (async () => {
        try {
            const result = await calculate(10, 2)
            return result
        } catch (error) {
            console.log(error)
        }
    }).then(
        (res) => console.log(res)
    );