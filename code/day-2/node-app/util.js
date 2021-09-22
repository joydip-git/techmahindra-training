const add = (a, b) => (a + b)
const subtract = (a, b) => (a - b)

// const utilModuleExportableMembers = {
//     addFn: add,
//     subtractFn: subtract
// }

const utilModuleExportableMembers = {
    add, //add:add
    subtract //subtract:subtract
}

module.exports = utilModuleExportableMembers

// console.log('util')
// console.log(module)

// module.exports.addFn = add
// module.exports.subtractFn = subtract