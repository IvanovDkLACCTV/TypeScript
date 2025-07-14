type HTTPMethod = "post" | "get"

function fetchWithAuth(url: string, method: HTTPMethod) {}

let newMethod: HTTPMethod = "post"

fetchWithAuth("https://google.com", newMethod)

type TOfficeInfo = {
  officeId: number
  isOpened: boolean
  contacts: {
    phone: string
    email: string
    address: {
      city: string
    }
  }
}

type TOfficeContacts = {
  phone: string
  email: string
  address: {
    city: string
  }
}

type newType = TOfficeContacts & TOfficeContacts

let newInfo: newType = {
  officeId: 45,
  isOpened: false,
  phone: "+79100000000",
  email: "my@email.ru",
  contacts: {
    phone: "+79100000000",
    email: "my@email.ru",
    address: {
      city: "Москва",
    },
  },
}
