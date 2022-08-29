import { IoCartSharp } from 'react-icons/io5'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../../hooks/useCart'

import {
  Button
} from './styles'

function FloatButton () {
  const { cart } = useCart()
  const navigate = useNavigate()

  return (
    <Button onClick={() => navigate('/carrinho')}>
      <span>{cart.length}</span>
      <IoCartSharp size={30} color="#fff"/>
    </Button>
  )
}

export default FloatButton