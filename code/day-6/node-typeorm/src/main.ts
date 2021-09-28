import { Connection, createConnection, createConnections, getConnection, QueryRunner } from 'typeorm'


function open() {
    createConnections()
        .then(
            (cons) => {
                cons.forEach(c => console.log(c.name))
            }, (err) => {
                console.log(err)
            }
        )
}
open()

// function open(conname: string) {
//     createConnection(conname)
//         .then(
//             (con) => {
//                 console.log(con.isConnected)
//                 console.log(con.name)
//                 // getConnection()
//             }, (err) => {
//                 console.log(err)
//             }
//         )
// }
// open('appDbCon')
// open('sqlDbCon')
// function operate() {
//     console.log('operating...')
//     const con = getConnection('f')
//     console.log(con)
// }
// operate()