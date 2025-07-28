"use strict";
const log = console.log;
class User {
    constructor(name) {
        this.name = name;
    }
}
const user = new User("John");
log(user);
user.name = "Frank";
log(user);
class Admin {
}
const admin = new Admin();
admin.role = 1;
