export class person {
    private personName: string;
    private personAge: number;
    private readonly personDob: Date;
    constructor(name: string, age: number, dob: Date) {
        this.personAge = age;
        this.personName = name;
        this.personDob = dob
    }
    // set Dob(dob: Date) {
    //     this.personDob = dob
    // }
    get Dob(): Date {
        return this.personDob
    }
    set Name(name: string) {
        this.personName = name
    }
    set Age(age: number) {
        this.personAge = age
    }
    get Name(): string {
        return this.personName
    }
    get Age(): number {
        return this.personAge
    }
    print = () => {
        return `${this.personName}, ${this.personAge}`
    }
    static getInfo() {
        return `hello`
    }
}
