function logId(id: string | number) {
  console.log(id)
}

logId(1)
logId("1")

function logId2(id: (string | number)[]) {
  if (typeof id === "string") {
    console.log(id)
  } else if (typeof id === "number") {
    console.log(id)
  } else {
    console.log(id)
  }
}

function logError(err: string | string[]) {
  if (Array.isArray(err)) {
    console.log(err)
  } else {
    console.log(err)
  }
}

function logObject(obj: { a: number } | { b: number }) {
  if ("a" in obj) {
    console.log(obj.a)
  } else {
    console.log(obj.b)
  }
}
