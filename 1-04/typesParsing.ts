(() => {
  let a = 5
  let b: string = a.toString()
  let e: boolean = new Boolean(a).valueOf() //так как конструктор типа является объектом, надо брать значение

  let c = "Hello World!"
  let d: number = +c

  interface User {
    name: string
    email: string
    login: string
    password: string
  }

  type User2 = {
    name: string
    email: string
    login: string
    password: string
  }

  const user = {
    name: "John Doe",
    email: "johndoe@example.com",
    login: "johndoe",
    password: "123456",
  } as User

  interface Admin {
    name: string
    role: number
  }


  const admin: Admin = {
    ...user,
    role: 1,
  }

  //функция мапинга
  function userToAdmin(user: User): Admin {
    return {
      name: user.login,
      role: 1,
    }
  }
})()
