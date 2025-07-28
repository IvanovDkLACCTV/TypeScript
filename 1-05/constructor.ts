const log = console.log;

class User{
    name: string
    age: number

    constructor()
    constructor(name: string)
    constructor(age: number)
    constructor(name: string, age: number)
    constructor(nameOrAge?: string | number, age?: number) {
        if (typeof nameOrAge === 'string'){
            this.name = nameOrAge
        } else if (typeof nameOrAge === 'number') {
            this.age = nameOrAge
        }
        if (typeof age === 'number'){
            this.age = age
        }
    }
}

const user = new User("John");
const user2 = new User()
const user3 = new User(33)
const user4 = new User("Alice", 33)