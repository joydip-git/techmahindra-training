//'use strict'
function call() {
    console.log(this)
    this.x = 10

    //1. declare a variable to store current context's owner reference and use it inside inner scope
    //var ref = this;

    /*
    var fn = function () {
        console.log(this)
        this.y = 20
        //var res = this.x + this.y
        //var res = ref.x + this.y
        var res = this.x + this.y
        console.log(res)
    }
    //fn()//30
    //2. bind() to the parent owner's context
    fn = fn.bind(this)
    //fn.apply(this)
    fn()
    */

    //3. use arrow function style
    var fn = () => {
        console.log(this)
        this.y = 20
        var res = this.x + this.y
        console.log(res)
    }
    fn()
}
//window.call()
new call()
/*
'use strict'
function person(name, id, subject, location) {

    this.personName = name;
    this.personId = id;
    this.subject = subject;
    this.location = location;

    this.print = () => {
        return this.personName
    }
    //return this;
}

var karthikObject = new person('karthik', 1, 'Java', 'Chennai')
var gobiObject = new person('Gobi', 2, 'Java', 'Chennai')

// console.log(karthikObject.personName)
// console.log(gobiObject['personName'])
// console.log(gobiObject.print())

var people = [karthikObject, gobiObject]

for (var i = 0; i < people.length; i++) {
    var printFnRef = people[i].print;
    // var boundPrintFnRef = printFnRef.bind(people[i])
    // printInfo(boundPrintFnRef)
    printInfo(printFnRef)
}

function printInfo(fnRef) {
    console.log(this)
    console.log(fnRef())
}
*/
