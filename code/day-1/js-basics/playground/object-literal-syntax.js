//1. object literal syntax

var joydipObject = {
    //attributes => value properties
    name: 'joydip',
    id: 1,
    subject: 'JS',
    //functionalities => functional properties
    print: function () {
        console.log(this)
        return this.id + ' ' + this.name + ' ' + this.subject
    }
}

console.log(joydipObject.name)
console.log(joydipObject['name'])
console.log(joydipObject.print())

//dynamically expand
joydipObject.location = 'Bangalore'
joydipObject['location'] = 'Bangalore'
joydipObject.show = function () {
    console.log(this.location)
}

for (var propName in joydipObject) {
    var propValue = joydipObject[propName]
    console.log(propName + ': ' + propValue)
}
joydipObject.show()