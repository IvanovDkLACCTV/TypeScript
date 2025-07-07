// Make this file a module
export {};

const skills: string[] = ["Dev", "DevOps", "Testing"]

for (const skill of skills) {
  console.log(skill.toLowerCase())
}

const result = skills
  .filter((s: string) => s !== "Testing")
  .map((s) => {
    return 1
  })
  .reduce((a, b) => a + b)

console.log(result)
