let input: unknown

input = 10

//let result: string = input

function run(i: unknown) {
  if (typeof i === "number") {
    i++
  } else if (typeof i === "string") {
    i
  }

  console.log(i)
}

run(input)

async function getData() {
  try {
    await fetch("https://jsonplaceholder.typicode.com/posts")
  } catch (e) {
    if (e instanceof Error) {
      console.log(e.message)
    }
  }
}

async function getData2() {
  try {
    await fetch("https://jsonplaceholder.typicode.com/posts")
  } catch (e) {
    const error = e as Error
  }
}

type U1 = unknown | number

type I1 = unknown & null
