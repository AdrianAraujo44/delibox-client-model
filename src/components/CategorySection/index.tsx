import { useNavigate } from 'react-router-dom'
import productDefault from './../../assets/productDefault.png'

import {
  Container,
  Item,
  Box,
} from './styles'

interface ICategory {
  title: string,
  products: Array<{
    _id: string,
    name: string,
    description: string,
    price: number,
    imageUrl: string
  }>
}

function CategorySection({ title, products }: ICategory) {
  const navigate = useNavigate()
  return (
    <Container>
      <h1>{title}</h1>
      <Box>
        {
          products.map((item, index) => (
            <Item key={index} onClick={() => navigate(`product/${item._id}`)}>
              <img src={item.imageUrl != "" ? item.imageUrl : productDefault} />
              <strong>{item.name}</strong>
              <span>R$ {item.price.toFixed(2)}</span>
            </Item>
          ))
        }
      </Box>

    </Container>
  )
}

export default CategorySection