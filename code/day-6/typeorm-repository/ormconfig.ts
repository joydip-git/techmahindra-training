export default [
    {
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
    }
]