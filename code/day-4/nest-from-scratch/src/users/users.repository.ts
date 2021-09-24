export class UsersRepository {
    private _repo: {}[]
    public get Repo(): {}[] {
        return this._repo
    }
    constructor() {
        this._repo = [{
            email: 'joy@gmail.com',
            password: 'joy@123'
        }, {
            email: 'swati@gmail.com',
            password: 'swati@123'
        }]
    }
}