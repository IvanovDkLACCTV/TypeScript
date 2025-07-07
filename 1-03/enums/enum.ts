const log = console.log

enum StatusCode {
  SUCCESS = 1,
  IN_PROGRESS = 2,
  FAILED = 3,
}

const res = {
  message: "Payed succesful",
  statusCode: 1,
}

// 1 - success
// 2 - in progress
// 3 - failed

function getStatus(code: StatusCode) {
  switch (code) {
    case StatusCode.SUCCESS:
      return "Success"
    case StatusCode.IN_PROGRESS:
      return "In progress"
    case StatusCode.FAILED:
      return "Failed"
  }
}

log(getStatus(StatusCode.SUCCESS))

const enum Roles {
  ADMIN,
  USER,
  GUEST,
}
