export interface ICart {
  cart : Array<{
    _id: string,
    name: string,
    price: number,
    amount: number,
    complements: Array<{
      price: number,
      amount: number
      name: string
    }>
  }>,
  setCart: any
}

export interface ICartProvider {
  children: JSX.Element
}