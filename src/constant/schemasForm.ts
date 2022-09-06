import * as Yup from 'yup'

export const schemaNewOrder = Yup.object().shape({
  name: Yup.string().required("Insira um nome válido"),
  phone: Yup.string().required("Insira um telefone válido"),
  address: Yup.object().shape({
    number: Yup.lazy(value => {
      if(value == undefined) {
        return Yup.mixed().notRequired()
      } 
      return Yup.string().required('Insira um número')
      
    })
  }),
  money: Yup.object().shape({
    type: Yup.lazy(value => {
      if(value == undefined) {
        return Yup.mixed().notRequired()
      }
      return Yup.string().required('escolha a forma de pagamento')
    })
  })
})