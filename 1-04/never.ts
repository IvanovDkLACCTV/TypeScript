function generateError(message: string): never {
  throw new Error(message)
}

function dumpError(): never {
  while (true) {}
}

function rec(): never {
  return rec()
}

type paymentAction = "refund" | "checkout" | "reject"

function paymentAction(action: paymentAction) {
  switch (action) {
    case "refund":
      break
    case "checkout":
      break
    case "reject":
      break
    default:
      const _: never = action
      throw new Error(`Unknown action: ${action}`)
  }
}

function isString(x: string | null): boolean {
  return typeof x === "string" ? true : false
}
