import CategorySection from '../../components/CategorySection'
import FloatButton from '../../components/FloatButton'
import SocialIcon from '../../components/SocialIcon'

import {
  Container,
  Wrapper,
  Logo,
  Title,
  SocialContainer,
  Address
} from './styles'

function Home() {

  return (
    <Container>
      <Wrapper 
        alt="wallpaper do delivery" 
        src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages6.alphacoders.com%2F912%2Fthumb-1920-912620.jpg&f=1&nofb=1"
      />
      <Logo
        alt="logo do delivery"
        src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.81tPPJdZtO1g_9deQA-spwHaHa%26pid%3DApi&f=1"
      />
      <Title>Pizzaria 3 estrelas</Title>
      <SocialContainer>
        <SocialIcon social={"whatsapp"}/>
        <SocialIcon social={"youtube"}/>
        <SocialIcon social={"instagram"}/>
        <SocialIcon social={"twitter"}/>
        <SocialIcon social={"facebook"}/>
      </SocialContainer>
      <Address>Rua 321 asdasdasdadad, 2300</Address>
      <Address>Asdfsdfsfsdf portugal</Address>

      <CategorySection
        title="bebidas"
        products={[
          {
            name:"agua",
            price: 0,
            description: "agua mineral",
            image: "data:image/jpeg;base64,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"
          },
          {
            name:"agua",
            price: 0,
            description: "agua mineral",
            image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.N1a28NkUpcA7Cw1INsuI6wHaEK%26pid%3DApi&f=1"
          },
          {
            name:"agua",
            price: 0,
            description: "agua mineral",
            image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.N1a28NkUpcA7Cw1INsuI6wHaEK%26pid%3DApi&f=1"
          }
        ]}
      />
      <CategorySection
        title="pizzas"
        products={[
          {
            name:"pizza de calabresa",
            price: 0,
            description: "agua mineral",
            image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.N1a28NkUpcA7Cw1INsuI6wHaEK%26pid%3DApi&f=1"
          }
        ]}
      />
      <CategorySection
        title="doces"
        products={[
          {
            name:"agua",
            price: 0,
            description: "agua mineral",
            image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.N1a28NkUpcA7Cw1INsuI6wHaEK%26pid%3DApi&f=1"
          }
        ]}
      />

      <FloatButton />
    </Container>
  )
}

export default Home