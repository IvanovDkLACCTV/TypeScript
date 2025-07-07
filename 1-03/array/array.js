const skills = ["Dev", "DevOps", "Testing"];
for (const skill of skills) {
    console.log(skill.toLowerCase());
}
const result = skills
    .filter((s) => s !== "Testing")
    .map((s) => {
    return 1;
})
    .reduce((a, b) => a + b);
console.log(result);
export {};
