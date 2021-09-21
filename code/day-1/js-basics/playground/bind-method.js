'use strict'
/*
var joydipObject = {

    personname: 'joydip',
    id: 1,
    subject: 'JS',

    print: function () {
        console.log(this)
        return this.id + ' ' + this.personname + ' ' + this.subject
    }
}

var printFn = joydipObject.print;
var res1 = printFn() //there is no(?) 'preceding' object in this call
console.log(res1)

var res = joydipObject.print() //there is a 'preceding' object in this call and that is 'joydipObject'
console.log(res)
*/
var people = [{
    personname: 'joydip',
    id: 1,
    subject: 'JS',
    print: function () {
        return this.id + ' ' + this.personname + ' ' + this.subject
    }
}, {
    personname: 'Gobi',
    id: 2,
    subject: 'Angular',
    print: function () {
        return this.id + ' ' + this.personname + ' ' + this.subject
    }
}]

for (var i = 0; i < people.length; i++) {
    var printFnRef = people[i].print;

    //if the function is not written using arrow function style
    var boundPrintFnRef = printFnRef.bind(people[i])
    printInfo(boundPrintFnRef)
}

function printInfo(fnRef) {
    console.log(this)
    console.log(fnRef())
}

















//object creation


//2. constructor function syntax



//3. Object.create() method
//4. ES6 class keyword and new keyword

