import { useEffect, useState } from 'react'
import CategorySection from '../../components/CategorySection'
import FloatButton from '../../components/FloatButton'
import Loading from '../../components/Loading'
import SocialIcon from '../../components/SocialIcon'
import { useDeliveryInfo } from '../../hooks/useDeliveryInfo'
import useRequestGet from '../../hooks/useRequestGet'

import {
  Container,
  Wrapper,
  Logo,
  Title,
  SocialContainer,
  Address
} from './styles'

function Home() {
  const { deliveryInfo, setDeliveryInfo } = useDeliveryInfo()
  const [menu, setMenu] = useState<any>([])
  const deliveryGet = useRequestGet()
  const menuGet = useRequestGet()

  useEffect(() => {
    if(deliveryInfo.name == null) {
      deliveryGet.requestGet(`/delivery/${import.meta.env.VITE_DELIVERY_ID}`)
    }
    menuGet.requestGet(`/delivery/${import.meta.env.VITE_DELIVERY_ID}/menu`)
  }, [])

  useEffect(() => {
    if (deliveryGet.loaded && !deliveryGet.error) {
      setDeliveryInfo(deliveryGet.data)
    } else if (deliveryGet.loaded && deliveryGet.error) {
      console.log(deliveryGet.error)
    }
  }, [deliveryGet.data, deliveryGet.loaded, deliveryGet.error])

  useEffect(() => {
    if (menuGet.loaded && !menuGet.error) {
      setMenu(menuGet.data?.menu)
    } else if (menuGet.loaded && menuGet.error) {
      console.log(menuGet.error)
    }
  }, [menuGet.data, menuGet.loaded, menuGet.error])

  return (
    <>
      {!deliveryGet.loading && !menuGet.loading ? (
        <Container>
          <Wrapper
            alt="wallpaper do delivery"
            src={deliveryInfo != null ? deliveryInfo.background : ""}
          />
          <Logo
            alt="logo do delivery"
            src={deliveryInfo != null ? deliveryInfo.logo : ""}
          />
          <Title>{deliveryInfo.name}</Title>
          <SocialContainer>
            <SocialIcon social={"whatsapp"} />
            <SocialIcon social={"youtube"} />
            <SocialIcon social={"instagram"} />
            <SocialIcon social={"twitter"} />
            <SocialIcon social={"facebook"} />
          </SocialContainer>
          <Address>{`${deliveryInfo?.address?.street}, ${deliveryInfo?.address?.number}`}</Address>
          <Address>{`${deliveryInfo?.address?.neighborhood} - ${deliveryInfo?.address?.city?.name}`}</Address>

          {
            menu.map((item: any, index: number) => (
              <CategorySection
                key={index}
                title={item.name}
                products={item.products}
              />
            ))
          }
          <FloatButton />
        </Container>
      ) : (
        <Loading />
      )}
    </>

  )
}

export default Home