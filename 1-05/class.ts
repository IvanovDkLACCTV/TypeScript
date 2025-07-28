const log = console.log;

class User{
    name: string

    constructor(name: string) {
        this.name = name
    }
}

const user = new User("John");

log(user)

user.name = "Frank"

log(user)


class Admin {
    role!: number
}

const admin = new Admin()
admin.role = 1