import { useState } from 'react'
import { useCart } from '../../hooks/useCart'
import Counter from '../Counter'
import productDefault from './../../assets/productDefault.png'

import {
  Item,
  Box,
  Content
} from './styles'

interface ICartItem {
  _id: string,
  imageUrl: string,
  name: string,
  amount: number,
  price: number,
  complements: any
}

function CartItem({ _id, imageUrl, name, amount, price, complements }: ICartItem) {
  const [amountState, setAmountState] = useState(amount)
  const { cart, setCart } = useCart()

  const removeItem = (id: string) => {
    let auxCart = [...cart]
    let find = 0

    auxCart.forEach((item, index) => {
      if (item._id == id) find = index
    })

    auxCart.splice(find, 1)
    setCart(auxCart)
  }

  const priceItem = () => {
    let total = 0
    complements.forEach((complement:any) => {
      total += complement.price * complement.amount
    })
    total = (total + price) * amount
    return total
  }

  return (
    <Item>
      <Box>
        <Content>
          <img src={imageUrl != "" ? imageUrl : productDefault} />
          <div className="box">
            <span>{name}</span>
            <span>R$ {priceItem().toFixed(2)}</span>
          </div>
        </Content>
        <Counter amount={amountState} setAmount={setAmountState} id={_id} />
      </Box>
      <div className="complements">
        {
          complements?.map((element: any, index: number) => (
            <span key={index}>{`${element?.amount}x ${element?.name}`}</span>
          ))
        }
      </div>
      <span className="remove" onClick={() => removeItem(_id)}>excluir do carrinho</span>
    </Item>

  )
}

export default CartItem