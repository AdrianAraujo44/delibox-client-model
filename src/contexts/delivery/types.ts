export interface IdeliveryInfo {
  deliveryInfo: {
    name: string,
    logo: string,
    background: string,
    address: {
      number: string,
      street: string,
      neighborhood: string,
      city: {
        name: string
      }
    },
    taxs: [
      {
        neighborhood: string,
        price: number,
        _id: string
      }
    ]
  },
  setDeliveryInfo: any

}