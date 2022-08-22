import { IoAddSharp } from 'react-icons/io5'
import {
  Container,
  Item,
  Box,
  TextGroup
} from './styles'

interface ICategory {
  title: string,
  products: Array<{
    name: string,
    description: string,
    price: number,
    image: string
  }>
}

function CategorySection ({title, products}: ICategory) {
  return (
    <Container>
      <h1>{title}</h1>
      {
        products.map((item) => (
          <Item>
            <Box>
              <img src={item.image} />
              <TextGroup>
                <span>{item.name}</span>
                <span>{item.description}</span>
                <strong>R$ {item.price}</strong>
              </TextGroup>
            </Box>
            <Box>
              <button>
                <IoAddSharp size={35} color="#fff"/>
              </button>
            </Box>
          </Item>
        ))
      }
    </Container>
  )
}

export default CategorySection