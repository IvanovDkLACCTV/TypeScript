const log = console.log;
const getFullName = (userEntity) => {
    return `${userEntity.firstName} ${userEntity.lastName}`;
};
const user = {
    firstName: "John",
    lastName: "Doe",
    age: 20,
    city: "New York",
};
log(getFullName(user));
export {};
