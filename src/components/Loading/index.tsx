import Lottie from "lottie-react"
import LoadingAnimation from '../../assets/loading.json'
import {
  Content
} from './styles'

function Loading () {
  const style = {
    height: 150,
  };
  return (
    <Content>
      <Lottie animationData={LoadingAnimation} style={style} loop={true}/>
      <p>carregando...</p>
    </Content>
  )
}

export default Loading