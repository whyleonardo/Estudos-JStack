const array = [
  { product: 'iPhone', price: 5000, quantity: 2 },
  { product: 'MacBook Pro', price: 20000, quantity: 1 },
  { product: 'Magic Mouse', price: 1000, quantity: 5 }
]

// find & findIndex
const find = array.find(({ price }) => price > 3500)
const findIndex = array.findIndex(({ price }) => price >= 20000)

// some && every
const some = array.some(({ price }) => price > 3500)
const every = array.every(({ price }) => price >= 1000)

// map
const map = array.map((product) => ({ ...product, subtotal: product.price * product.quantity }))

// filter
const filter = array.filter((product) => product.quantity > 1)

console.log(filter)