//? Private Variables
const user = {
  name: 'Sidney Sebban',
  balance: 1000,
  transactions: [],
}

export const userService = {
  getCurrUser,
}

function getCurrUser() {
  return user
}
