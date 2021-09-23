class person {
    constructor(name, subject) {
        this.name = name
        this.subject = subject
    }
    print() {
        return `Name:${this.name}, Subject:${this.subject}`
    }
}
class trainee extends person {
    constructor(name, subject, project) {
        super(name, subject)
        this.project = project
    }
    print = () => {
        return `${super.print()}, Project: ${this.project} `
    }
}
const sachin = new trainee('sachin', 'JS', 'CITA')
console.log(sachin.print())