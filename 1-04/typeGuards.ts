(() => {

    var log = console.log

    interface User {
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

  function logId(id: string | number) {
    if (isString(id)) {
        log(id)
    } else  {
        log(id)
    }
    
}

function isString(x: string | number): x is string {
    return typeof x === "string"
}


function isAdmin(user: User | Admin): user is Admin {
    return 'role' in user
}

function setRoleZero(user: User | Admin) {
    
}






})()