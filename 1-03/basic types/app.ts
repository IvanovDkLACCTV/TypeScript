const log = console.log
export {}

const getFullName = (userEntity: {
  firstName: string
  lastName: string
}): string => {
  return `${userEntity.firstName} ${userEntity.lastName}`
}

const user = {
  firstName: "John",
  lastName: "Doe",
  age: 20,
  city: "New York",
}

log(getFullName(user))
