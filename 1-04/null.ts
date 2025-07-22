const n: null = null
//const o: null = {}

interface User {
  name: string
}

function getUser() {
  if (Math.random() < 0.5) {
    return null
  } else {
    return {
      name: "张三",
    } as User
  }
}

const user = getUser()
if (user) {
  const n55 = user.name
}
