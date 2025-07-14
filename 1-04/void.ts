export {}

function logId(id: string | number): void {}

type voidFunction = () => void

const f1: voidFunction = () => {
  console.log("void")
}

const f2: voidFunction = () => {
  return true
}

const f3 = function (): void {}

const skills = ["Dev", "DevOps", "Testing"]

const user = {
  s: ["s"],
}

skills.forEach((skill) => user.s.push(skill))
