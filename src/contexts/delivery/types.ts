export interface IdeliveryInfo {
  deliveryInfo: {
    name: string,
    logo: string,
    background: string,
    status: string,
    address: {
      cep: string,
      number: string,
      street: string,
      neighborhood: string,
      complement: string,
      city: {
        name: string
      }
    },
    social: {
      youtube: string,
      instagram: string,
      facebook: string,
      whatsapp: string,
      twitter: string
    },
    taxs: [
      {
        neighborhood: string,
        price: number,
        _id: string
      }
    ],
    hourWork: {
      monday: {
        start: string,
        end: string
      },
      tuesday: {
        start: string,
        end: string
      },
      wednesday: {
        start: string,
        end: string
      },
      thursday: {
        start: string,
        end: string
      },
      friday: {
        start: string,
        end: string
      },
      saturday: {
        start: string,
        end: string
      },
      sunday: {
        start: string,
        end: string
      },
      holiday: {
        start: string,
        end: string
      }
    },
  },
  setDeliveryInfo: any

}