import { IoCartSharp } from 'react-icons/io5'

import {
  Button
} from './styles'

function FloatButton () {
  return (
    <Button>
      <span>99</span>
      <IoCartSharp size={30} color="#fff"/>
    </Button>
  )
}

export default FloatButton