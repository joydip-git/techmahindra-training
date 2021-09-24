class Container {
    static create() {
        return new DataService()
    }
}
// class Container {
//     static create<T>() {
//         return new T()
//     }
// }
module.exports = {
    Container
}