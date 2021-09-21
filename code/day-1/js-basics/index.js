function call() {
    console.log(this)
    this.x = 10

    var fn = function () {
        console.log(this)
        this.y = 20
        var res = this.x + this.y
        console.log(res)
    }
    fn()//30
}
//window.call()
call()

function person()
