import { useEffect, useState } from 'react'
import { IoArrowBack, IoCart } from 'react-icons/io5'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import Counter from '../../components/Counter'
import { useCart } from '../../hooks/useCart'
import useRequestGet from '../../hooks/useRequestGet'
import productDefault from './../../assets/productDefault.png'

import {
  Container,
  Content,
  Button
} from './styles'

function ProductDetail() {
  const { productId } = useParams()
  const navigate = useNavigate()
  const [data, setData] = useState<any>({})
  const productGet = useRequestGet()
  const [amount, setAmount] = useState(1)
  const { cart, setCart } = useCart()

  useEffect(() => {
    productGet.requestGet(`product/${productId}`)
  }, [])

  useEffect(() => {
    if (productGet.loaded && !productGet.error) {
      setData(productGet.data.product)
    } else if (productGet.loaded && productGet.error) {
      console.log(productGet.error)
    }
  }, [productGet.data, productGet.loaded, productGet.error])

  const addCart = () => {
    let exits = false
    let position = 0

    for (let i = 0; i< cart.length; i++) {
      if (cart[i]._id == data?._id) {
        exits = true
        position = i
        break
      } else {
        exits = false
      }
    }

    if(exits) {
      let aux = cart
      aux[position].amount += amount
      setCart([...aux])
    }else {
      setCart([...cart, {
        _id: data?._id,
        name: data?.name,
        price: data?.price,
        imageUrl: data?.imageUrl,
        amount
      }])
    }


    // toast.success("item adicionado ao carrinho!")
    navigate('/')
  }

  return (
    <Container>
      <header>
        <button type="button">
          <IoArrowBack size={20} onClick={() => navigate('/')} />
        </button>
        <span>voltar</span>
      </header>
      <Content>
        <img
          src={data.imageUrl != "" ? data.imageUrl : productDefault}
          alt="image do produto" />
        <strong>{data?.name}</strong>
        <p>{data?.description}</p>
        <section>
          <Counter setAmount={setAmount} />
          <strong>R$ {data?.price}</strong>
        </section>
        <Button onClick={() => addCart()}>
          <IoCart size={25} color={'#fff'} />
          adicionar ao carrinho
        </Button>
      </Content>
    </Container>
  )
}

export default ProductDetail