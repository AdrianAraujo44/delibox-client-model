export interface ICart {
  cart : Array<{
    _id: string,
    name: string,
    price: number,
    amount: number
  }>,
  setCart: any
}

export interface ICartProvider {
  children: JSX.Element
}