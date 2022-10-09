import { IoCartSharp } from 'react-icons/io5'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../../hooks/useCart'
import { getTotalPriceOrder } from '../../utils/functions'

import {
  Button
} from './styles'

function FloatButton () {
  const { cart } = useCart()
  const navigate = useNavigate()

  return (
    <Button onClick={() => navigate('/carrinho')}>
      <div>
        <strong>{cart.length}</strong>
        <IoCartSharp size={30} color="#fff"/>
      </div>
      <span>ver carrinho</span>
      <span>{`R$ ${getTotalPriceOrder(cart).toFixed(2)}`}</span>
    </Button>
  )
}

export default FloatButton