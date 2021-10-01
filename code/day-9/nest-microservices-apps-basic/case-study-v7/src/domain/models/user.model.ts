export class UserModel {

    constructor(public email?: string, public password?: string, public username?: string, public id?: number) {
        this.validatePassword()
    }
    validatePassword(): void {
        if (!(this.password.length >= 6 && this.password.length <= 10)) {
            throw new Error('padssword length should be between 6 and 10')
        }
    }
}