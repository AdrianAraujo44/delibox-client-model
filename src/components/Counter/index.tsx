import { useState } from 'react'
import { IoAdd, IoRemove } from 'react-icons/io5'
import { useLocation } from 'react-router-dom'
import { useCart } from '../../hooks/useCart'
import {
  Container
} from './styles'

function Counter ({ amount = 1, setAmount, id }:any) {
  const [number, setNumber] = useState(amount)
  let location = useLocation()
  const { cart, setCart } = useCart()

  const add = () => {
    if(location.pathname.includes('/carrinho')) {
      let auxCart = [...cart]
      auxCart.forEach((element) => {
        if(element._id == id) {
          element.amount = number + 1
          console.log('atualizou')
        }
      })
      setCart(auxCart)
    }

    setAmount(number + 1)
    setNumber(number + 1)
  }

  const decrease = () => {
    if(location.pathname.includes('/carrinho')) {
      let auxCart = [...cart]
      auxCart.forEach((element) => {
        if(element._id == id) {
          element.amount = number - 1
          console.log('atualizou')
        }
      })
      setCart(auxCart)
    }

    setAmount(number - 1)
    setNumber(number - 1)
  }
  
  return (
    <Container>
      <button 
        onClick={() => decrease()}
        disabled={number <= 1 ? true : false}
      >
        <IoRemove size={20}/>
      </button>
      <span>{number}</span>
      <button onClick={() => add()}><IoAdd size={20} /></button>
    </Container>
  )
}

export default Counter