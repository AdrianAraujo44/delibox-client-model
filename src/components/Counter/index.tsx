import { useState } from 'react'
import { IoAdd, IoRemove } from 'react-icons/io5'
import {
  Container
} from './styles'

function Counter ({ amount = 1, setAmount }:any) {
  const [number, setNumber] = useState(amount)

  const add = () => {
    setAmount(number + 1)
    setNumber(number + 1)
  }
  
  return (
    <Container>
      <button 
        onClick={() => setNumber(number - 1)}
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