interface User {
  name: string
  age: number

  log: (id: number) => string
}

interface Role {
  isAdmin: boolean
}

interface UserWithRole extends User, Role {
  roleId: number
}

let user: UserWithRole = {
  name: "Jesus",
  age: 33,
  roleId: 1,
  isAdmin: true,

  log: (id) => {
    return id.toString()
  },
}

interface UserDicktionary {
  [index: number]: User
}

type UserDictionary = Record<number, User>
