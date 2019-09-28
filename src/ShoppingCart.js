class ShoppingCart {
  constructor() {
    this.items = []
  }

  getItems() {
    return this.items
  }

  addItem(name, quantity, pricePerUnit) {
    this.items.push({
      name: name,
      pricePerUnit: pricePerUnit,
      quantity: quantity
    })
  }


  clear() {
    this.items.length = 0
  }


  total() {
    const totalValue = this.items.reduce((accumulator, currentValue) => {
      return accumulator + (currentValue.pricePerUnit * currentValue.quantity)

    }, 0)
    return totalValue
  }
}



module.exports = ShoppingCart