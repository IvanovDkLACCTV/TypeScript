"use strict";
const skills = [1, "Dev"];
// const id = skills[0]
// const skillName = skills[1]
// skills.push("DevOps")
const [id, skillName] = skills;
console.log(skills);
const arr = [
    1,
    "Dev",
    true,
    false,
    true,
]; //readonly чтобы нельзя было переопределить значения кортежа
//аналогично
const skill = ["Dev", "DevOps", "Testing"]; //жденерик
