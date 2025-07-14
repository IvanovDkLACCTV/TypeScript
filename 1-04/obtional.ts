export {}

interface Omen {
  login: string
  password?: string
}

const user: Omen = {
  login: "admin",
  // password: "123456",
}

function multiply(first: number = 1, second?: number): number {
  if (!second) {
    return first * first
  }
  return first * second
}

console.log(user)
console.log(multiply(5))

interface SuperUser {
  login: string
  password?: {
    type: "primary" | "secondary"
  }
}

function testPass(user: SuperUser) {
  const t = user.password?.type
}

function testPass2(param?: string) {
  const t = param ?? multiply(10)
}
