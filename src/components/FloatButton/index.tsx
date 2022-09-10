import { IoCartSharp } from 'react-icons/io5'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../../hooks/useCart'

import {
  Button
} from './styles'

function FloatButton () {
  const { cart } = useCart()
  const navigate = useNavigate()

  const subTotal = () => {
    let total = 0
    cart.forEach((item) => {
      total += item.amount * item.price
    })
    return total
  }

  return (
    <Button onClick={() => navigate('/carrinho')}>
      <div>
        <strong>{cart.length}</strong>
        <IoCartSharp size={30} color="#fff"/>
      </div>
      <span>ver carrinho</span>
      <span>{`R$ ${subTotal().toFixed(2)}`}</span>
    </Button>
  )
}

export default FloatButton