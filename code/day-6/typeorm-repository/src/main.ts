import { Connection, createConnection } from 'typeorm'
import { User } from './entities/user.entity'
import { UsersRepository } from './entities/users.repository'
/*
createConnection()
    .then(
        async (con: Connection) => {
            // const userModel = new User()
            // userModel.email = 'joydip@gmail.com'
            // userModel.password = 'joy@123'
            // userModel.username = 'joy_user'
            // await userModel.save()

            // const found = await User.findOne({ email: 'joydip@gmail.com' })
            const found = await User.findUserByName('joydip_user')
            console.log(found)
        },
        (err) => {
            console.log(err)
        }
    )


createConnection()
    .then(
        async (con: Connection) => {
            const userRepo = con.getRepository(User)
            const userModel = new User()
            userModel.email = 'gobi@gmail.com'
            userModel.password = 'gobi@123'
            userModel.username = 'gobi_user'
            const added = await userRepo.save(userModel)
            console.log(added)
        },
        (err) => {
            console.log(err)
        }
    )
    */

createConnection()
    .then(
        async (con: Connection) => {
            const userRepo = con.getCustomRepository(UsersRepository)
            const found = await userRepo.findUserByName('gobi_user')
            console.log(found)
        },
        (err) => {
            console.log(err)
        }
    )