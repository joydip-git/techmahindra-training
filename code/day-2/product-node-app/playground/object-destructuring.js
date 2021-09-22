const obj = {
    id: 1,
    name: 'anil',
    salary: 3000,
    subject: 'JS',
    location: 'bangalore'
}

/*
const objSalary = obj.salary
const objName = obj.name
const objSubject = obj.subject
*/

// const { name: objName, salary: salary, subject: objSubject } = obj
// console.log(objName, salary, objSubject)
const { name: _name, salary, subject } = obj
console.log(_name, salary, subject)

