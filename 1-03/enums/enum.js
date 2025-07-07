"use strict";
const log = console.log;
var StatusCode;
(function (StatusCode) {
    StatusCode[StatusCode["SUCCESS"] = 1] = "SUCCESS";
    StatusCode[StatusCode["IN_PROGRESS"] = 2] = "IN_PROGRESS";
    StatusCode[StatusCode["FAILED"] = 3] = "FAILED";
})(StatusCode || (StatusCode = {}));
const res = {
    message: "Payed succesful",
    statusCode: 1,
};
// 1 - success
// 2 - in progress
// 3 - failed
function getStatus(code) {
    switch (code) {
        case StatusCode.SUCCESS:
            return "Success";
        case StatusCode.IN_PROGRESS:
            return "In progress";
        case StatusCode.FAILED:
            return "Failed";
    }
}
log(getStatus(StatusCode.SUCCESS));
var Roles;
(function (Roles) {
    Roles[Roles["ADMIN"] = 0] = "ADMIN";
    Roles[Roles["USER"] = 1] = "USER";
    Roles[Roles["GUEST"] = 2] = "GUEST";
})(Roles || (Roles = {}));
