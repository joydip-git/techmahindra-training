function person(name, subject) {
    this.name = name
    this.subject = subject
    // this.print = () => {
    //     return `Name:${this.name}, Subject:${this.subject}`
    // }
}
person.prototype.print = function () {
    return `Name:${this.name}, Subject:${this.subject}`
}

function trainer(name, subject, domain) {
    person.call(this, name, subject)
    this.domain = domain
    this.print = () => {
        const partialInfo = person.prototype.print.apply(this)
        return `${partialInfo}, domain:  ${this.domain} `
        // return `Name:${this.name}, Subject:${this.subject}, domain:  ${this.domain}`
    }
}

function trainee(name, subject, project) {
    // this.name = name
    // this.subject = subject

    this.project = project

    this.print = () => {
        return `Name:${this.name}, Subject:${this.subject}, Project: ${this.project}`
    }
}

// trainer.prototype.callFn = function () {
//     console.log('hello')
// }
const joydip = new trainer('joy', 'JS', 'JS framework')
console.log(joydip.print())
// console.log(joydip.hasOwnProperty('callFn'))
// console.log(trainer.prototype.hasOwnProperty('callFn'))
// console.log(Object.prototype.hasOwnProperty('callFn'))
// joydip.callFn()

// const trainee = new trainee('sachin', 'JS', 'CITA')

// console.log(Object.prototype)
// console.log(person.prototype)
// console.log(trainee.prototype)
console.log(trainer.prototype)

