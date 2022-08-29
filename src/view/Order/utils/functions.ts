export const getOrderStatus = (status: any, name: string) => {
  let exits = false

  for(let i=0; i < status.length ; i++) {
    if(status[i].name == name) {
      exits = true
      break
    }else {
      exits = false
    }
  }
  return exits
}