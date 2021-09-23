function person(name, subject) {
    this.name = name
    this.subject = subject
}
person.prototype.print = function () {
    return `Name:${this.name}, Subject:${this.subject}`
}
function trainee(name, subject, project) {
    person.call(this, name, subject)
    this.project = project
    this.print = () => {
        return `${person.prototype.print.apply(this)}, Project: ${this.project}`
    }
}

const sachin = new trainee('sachin', 'JS', 'CITA')
console.log(sachin.print())