//global execution context
console.log(x) //undefined
//var x;
var x = 10;
console.log(x) // 10

console.log(typeof sub)
//sub(10, 4) //????


//assignment
//function expression
var sub = function (a, b) {
    var res = a - b
    console.log(res)
}

add(10, 3) //13
//function declaration
function add(a, b) {
    sub(10, 3)
    //execution context for add
    var z
    console.log(z)
    z = a + b
    console.log(z)
}


console.log(typeof sub)
sub(10, 5)//5

for (var i = 0; i < 2; i++) {
    x = 30
    console.log(x) // 30
}

console.log(x) // 30
add(10, 20)//30


//hoisting

//new feature
//let --> scoping the variable
//const add = (a, b)=> a + b

//function calls to be executed
//declaration
//assignments