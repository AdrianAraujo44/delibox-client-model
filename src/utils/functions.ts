export const getTotalPriceOrder = (products:any[]) => {
  let total = 0
  let totalComplements = 0
  products?.forEach((item:any) => {
    item.complements.forEach((complement:any) => {
      totalComplements += complement.price * complement.amount
    })
    total += (totalComplements + item.price) * item.amount
    totalComplements = 0
  })
  return total
}

export const getTotalPriceProduct= (complements:any[], productPrice:number, productAmount: number) => {
  let total = 0
    complements.forEach((complement:any) => {
      total += complement.price * complement.amount
    })
    total = (total + productPrice) * productAmount
    return total
}