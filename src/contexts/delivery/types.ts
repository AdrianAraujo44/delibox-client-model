export interface IdeliveryInfo {
  deliveryInfo: {
    name: string,
    logo: string,
    background: string,
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
        am: {
          start: string,
          end: string
        },
        pm: {
          start: string,
          end: string
        }
      },
      tuesday: {
        am: {
          start: string,
          end: string
        },
        pm: {
          start: string,
          end: string
        }
      },
      wednesday: {
        am: {
          start: string,
          end: string
        },
        pm: {
          start: string,
          end: string
        }
      },
      thursday: {
        am: {
          start: string,
          end: string
        },
        pm: {
          start: string,
          end: string
        }
      },
      friday: {
        am: {
          start: string,
          end: string
        },
        pm: {
          start: string,
          end: string
        }
      },
      saturday: {
        am: {
          start: string,
          end: string
        },
        pm: {
          start: string,
          end: string
        }
      },
      sunday: {
        am: {
          start: string,
          end: string
        },
        pm: {
          start: string,
          end: string
        }
      },
      holiday: {
        am: {
          start: string,
          end: string
        },
        pm: {
          start: string,
          end: string
        }
      }
    },
  },
  setDeliveryInfo: any

}