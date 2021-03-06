export default [
    {
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
    },
    {
        "name": "sqlDbCon",
        "type": "sqlite",
        "database": "db.sqlite",
        "synchronize": true,
        "logging": false,
        "entities": [
            "src/entities/*.entity{.ts,.js}"
        ]
    }
]