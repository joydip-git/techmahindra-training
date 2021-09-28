import { Connection, ConnectionManager, createConnection, createConnections, getConnection, getConnectionManager, QueryRunner } from 'typeorm'

let connectionManager: ConnectionManager;
function create() {
    connectionManager = getConnectionManager();
    const con = connectionManager.create({
        "name": "appDbCon",
        "type": "postgres",
        "host": "localhost",
        "port": 5432,
        "username": "postgres",
        "password": "admin",
        "database": "appdb",
        "synchronize": true,
        "logging": false,
        "entities": [
            "src/entities/*.entity{.ts,.js}"
        ]
    })
    return con;
}

function establishConnection() {
    let con = create()
    return con.connect()
}


establishConnection()
    .then(
        c => {
            console.log(c.isConnected)
            //connectionManager.get()
        },
        e => console.log(e)
    )


/*
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
*/
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