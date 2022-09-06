import { FormHandles } from '@unform/core'
import axios from 'axios'
import { useEffect } from 'react'
import { useRef, useState } from 'react'
import { IoArrowBack } from 'react-icons/io5'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import InputForm from '../../components/Forms/InputForm'
import SelectForm from '../../components/Forms/SelectForm'
import TextAreaForm from '../../components/Forms/TextAreaForm'
import { useSocket } from '../../contexts/socket/useSocket'
import { useCart } from '../../hooks/useCart'
import { useValidateForm } from '../../hooks/useValidadeForm'
import { schemaNewOrder } from '../../constant/schemasForm'

import {
  Container,
  Form,
  Row,
  Payment
} from './styles'


function NewOrder() {
  const formRef = useRef<FormHandles>(null)
  const navigate = useNavigate()
  const socket = useSocket()
  const { cart } = useCart()
  const { cep } = useParams()
  const [address, setAddress] = useState<any>()
  const [paymentMethod, setPaymentMethod] = useState("")

  useEffect(() => {
    socket.on('get_code_order', code => {
      navigate(`/pedido/${code}`)
    })
  }, [socket])

  useEffect(() => {
    if (cep) {
      getAddress(cep)
    }
  }, [cep])

  const getAddress = async (cep: string) => {
    try {
      const response = await axios.get(`https://api.pagar.me/1/zipcodes/${cep}`)
      setAddress(response.data)
    } catch (err) {
      toast.error('cep não encontrado!')
    }
  }
  const {handleSubmit} = useValidateForm({
    formRef, schema: schemaNewOrder,
    onSuccess: (data:any) => {
      let productsAux: { amount: number, item: string }[] = []

      cart.forEach((item) => {
        productsAux.push({ amount: item.amount, item: item._id })
      })
  
      socket.emit("new_orders", {
        deliveryId: import.meta.env.VITE_DELIVERY_ID,
        type: cep ? "entrega" : "retirada",
        date: new Date(),
        notes: data.notes,
        money: {
          type: "dinheiro",
          change: data?.money?.change | 0
        },
        client: {
          name: data.name,
          phone: data.phone,
          address: {
            street: address?.street,
            number: data?.address?.number,
            complement: data?.address?.complement,
            cep: cep,
            neighborhood: address?.neighborhood
          }
        },
        products: productsAux
      }, socket.id)
    }
  })

  return (
    <Container>
      <header>
        <button type="button">
          <IoArrowBack size={20} onClick={() => navigate('/carrinho')} />
        </button>
        <span>voltar</span>
      </header>
      <Form ref={formRef} onSubmit={(data) => handleSubmit(data)} >
        {
          cep ? (
            <h1>Informações de entrega</h1>
          ) : (
            <h1>Informações de retirada</h1>
          )
        }
        <InputForm name="name" placeholder="nome do cliente" />
        <InputForm name="phone" placeholder="telefone" />
        {
          cep && (
            <>
              <span>CEP: {address?.zipcode}</span>
              <span>Rua: {address?.street}</span>
              <span>Bairro: {address?.neighborhood}</span>
              <Row>
                <InputForm name="address.number" placeholder="número" />
                <InputForm name="address.complement" placeholder="complemento" />
              </Row>
            </>
          )
        }
        {
          cep && (
            <SelectForm
              name="money.type"
              label="forma de pagamento"
              onChange={({ value }) => setPaymentMethod(value)}
              options={[
                {
                  label: "dinheiro",
                  value: "money"
                }
              ]}
            />
          )
        }

        {
          (paymentMethod == "money") && (
            <Payment>
              <h3>Troco para quanto ?</h3>
              <p>
                seu pedido deu R$ 20.00, caso precise de troco, digite quanto vai pagar em dinheiro para que o entregador leve-o para você
              </p>
              <div className='inputStyles'>
                <InputForm name="money.change" label='valor em R$' />
              </div>
            </Payment>
          )
        }
        <h1>Observações</h1>
        <TextAreaForm
          name="notes"
          placeholder="Você tem alguma observação relacionada ao seu pedido ?"
        />
        <button type="submit">finalizar pedido</button>
      </Form>
    </Container>
  )
}

export default NewOrder 