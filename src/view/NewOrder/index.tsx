import { FormHandles } from '@unform/core'
import axios from 'axios'
import { useEffect } from 'react'
import { useRef, useState } from 'react'
import { IoArrowBack } from 'react-icons/io5'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import InputForm from '../../components/Forms/InputForm'
import TextAreaForm from '../../components/Forms/TextAreaForm'
import { useSocket } from '../../contexts/socket/useSocket'
import { useCart } from '../../hooks/useCart'
import {
  Container,
  Form
} from './styles'

function NewOrder () {
  const formRef = useRef<FormHandles>(null)
  const navigate = useNavigate()
  const socket = useSocket()
  const { cart } = useCart()

  useEffect(() => {
    socket.on('get_code_order', code => {
      navigate(`/pedido/${code}`)
    })
  }, [socket])

  const getAddress = async(cep:string) => {
    try {
      const response = await axios.get(`https://api.pagar.me/1/zipcodes/${cep}`)
      console.log(formRef.current?.getData())
      let aux = {...formRef.current?.getData()}
  
      aux.address.cep = response.data.zipcode
      aux.address.street = response.data.street
      aux.address.neighborhood = response.data.neighborhood
  
      formRef.current?.setData(aux)
    } catch(err) {
      toast.error('cep não encontrado!')
    }
  }

  const handlerSubmit = (data:any) => {
    let productsAux : {amount: number, item: string}[] = []

    cart.forEach((item ) => {
      productsAux.push({amount:item.amount, item: item._id})
    })

    socket.emit("new_orders", {
      deliveryId: import.meta.env.VITE_DELIVERY_ID,
      date: new Date(),
      notes: data.notes,
      money: {
        type: "dinheiro",
        change: 0
      },
      client: {
        name: data.name,
        phone: data.phone,
        address: {
          street: data.address.street,
          number: data.address.number,
          complement: "",
          cep: data.address.cep,
          neighborhood: data.address.neighborhood
        }
      },
      products: productsAux
    }, socket.id)
  }

  return (
    <Container>
      <header>
        <button type="button">
          <IoArrowBack size={20} onClick={() => navigate('/carrinho')} />
        </button>
        <span>voltar</span>
      </header>
      <Form ref={formRef} onSubmit={(data) => handlerSubmit(data)} >
        <h1>Informações de entrega</h1>
        <InputForm name="name" placeholder="nome"/>
        <InputForm name="phone" placeholder="telefone"/>
        <InputForm name="address.cep" placeholder="cep" onBlur={(e) => getAddress(e.target.value)}/>
        <InputForm name="address.street" placeholder="rua" disabled={true}/>
        <InputForm name="address.number" placeholder="número"/>
        <InputForm name="address.neighborhood" placeholder="bairro" disabled={true}/>
       
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