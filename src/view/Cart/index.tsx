import { FormHandles } from '@unform/core'
import axios from 'axios'
import { useState } from 'react'
import { useRef } from 'react'
import { IoArrowBack, IoSearch } from 'react-icons/io5'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import CartItem from '../../components/CartItem'
import InputForm from '../../components/Forms/InputForm'
import { useCart } from '../../hooks/useCart'
import { useDeliveryInfo } from '../../hooks/useDeliveryInfo'

import {
  Container,
  PriceBox,
  Form
} from './styles'

function Cart() {
  const navigate = useNavigate()
  const formRef = useRef<FormHandles>(null)
  const { cart } = useCart()
  const { deliveryInfo } = useDeliveryInfo()
  const [taxDelivery, setTaxDelivery] = useState<string>('-')
  const [total, setTotal] = useState(0)

  const getZipcode = async({cep}:any) => {
    try {
      const response = await axios.get(`https://api.pagar.me/1/zipcodes/${cep}`)
      console.log(response.data)
      let haveNeighborhood = false
      let index = 0
      for(let i = 0; i < deliveryInfo.taxs.length ; i++) {
        if(deliveryInfo.taxs[i].neighborhood == response.data.neighborhood) {
          haveNeighborhood = true
          index = i
          break
        }else {
          haveNeighborhood = false
        }
      }

      if(haveNeighborhood) {
        setTaxDelivery(deliveryInfo.taxs[index].price.toFixed(2))
        setTotal((subTotal() + deliveryInfo.taxs[index].price))
      }else {
        toast.error("delivery indisponivel para esse bairro")
        setTotal(subTotal())
        setTaxDelivery('-')
      }

    }catch(err) {
      toast.error("cep não encontrado!")
    }
  }

  const subTotal = () => {
    let total = 0
    cart.forEach((item) => {
      total += item.amount * item.price
    })
    return total
  }

  return (
    <Container>
      <header>
        <button type="button">
          <IoArrowBack size={20} onClick={() => navigate('/')} />
        </button>
        <span>voltar</span>
      </header>
      <h1>Seu carrinho</h1>
      <h2>{cart.length} itens</h2>
      {
        cart.map((element: any, index: number) => (
          <CartItem 
            key={index}
            _id = {element._id}
            imageUrl={element.imageUrl}
            name={element.name}
            amount={element.amount}
            price={element.price}
          />
        ))
      }
      <Form ref={formRef} onSubmit={getZipcode}>
        <InputForm 
          name="cep" 
          label="calcular taxa de entrega"
          placeholder="cep" />

        <button type="submit">
          <IoSearch size={30} color="#fff"/>
        </button>
      </Form>
      <PriceBox>
        <div className="row">
          <span>Subtotal</span>
          <span>R$ {subTotal().toFixed(2)}</span>
        </div>
        <div className="row">
          <span>Taxa de entrega</span>
          <span>{ taxDelivery == '-' ? taxDelivery : `R$ ${taxDelivery}`}</span>
        </div>
        <div className="row">
          <span>Total</span>
          <strong>
            R$ {
            cart.length > 0 
              ? 
                (subTotal() + ( Number(taxDelivery) | 0)).toFixed(2) 
              : 
                total.toFixed(2)}
          </strong>
        </div>

        <button type="button" onClick={() => navigate('/novo-pedido')}>
          continuar
        </button>
      </PriceBox>
    </Container>
  )
}

export default Cart