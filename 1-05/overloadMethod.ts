//перегрузка метода класса

// @ts-ignore
class User {
    skills: string[]

    addSkill(skill: string): void
    addSkill(skill: string[]): void
    addSkill(skill: string | string[]): void{
        if(typeof skill === "string"){
            this.skills.push(skill)
        } else {
            this.skills.concat(skill)
        }
    }
}

///new User().addSkill()

//перегрузка функции
function run(distance: string): string
function run(distance: number): number
function run(distance: string | number): number | string{
    if(typeof distance === 'number'){
        return 1
    } else {
        return ''
    }
}

run()