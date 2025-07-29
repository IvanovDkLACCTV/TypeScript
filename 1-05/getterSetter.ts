class USer{
    _login: string
    password: string

    // getLogin(l: string){
    //     this.login = 'user' + l
    // }

    set login(l: string){
        this._login = 'user-' + l
    }

    get login(){
        return "no_Login"
    }
}

// @ts-ignore
const user = new USer()
user.login = "MyLogin"
console.log(user.login)