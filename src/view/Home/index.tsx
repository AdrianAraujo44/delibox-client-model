import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import CategorySection from '../../components/CategorySection'
import FloatButton from '../../components/FloatButton'
import Loading from '../../components/Loading'
import { useCart } from '../../hooks/useCart'
import { useDeliveryInfo } from '../../hooks/useDeliveryInfo'
import useRequestGet from '../../hooks/useRequestGet'
import { getStatusDelivery } from './utils/functions'
import { toast } from 'react-toastify'

import {
  Container,
  Wrapper,
  Logo,
  Title,
} from './styles'

function Home() {
  const { deliveryInfo, setDeliveryInfo } = useDeliveryInfo()
  const [menu, setMenu] = useState<any>([])
  const deliveryGet = useRequestGet()
  const menuGet = useRequestGet()
  const navigate = useNavigate()
  const { cart } = useCart()

  useEffect(() => {
    if (deliveryInfo.name == null) {
      deliveryGet.requestGet(`/delivery/${import.meta.env.VITE_DELIVERY_ID}`)
    }
    menuGet.requestGet(`/delivery/${import.meta.env.VITE_DELIVERY_ID}/menu`)
  }, [])

  useEffect(() => {
    if (deliveryGet.loaded && !deliveryGet.error) {
      setDeliveryInfo(deliveryGet.data)
    } else if (deliveryGet.loaded && deliveryGet.error) {
      toast.error(deliveryGet.error)
    }
  }, [deliveryGet.data, deliveryGet.loaded, deliveryGet.error])

  useEffect(() => {
    if (menuGet.loaded && !menuGet.error) {
      setMenu(menuGet.data?.menu)
    } else if (menuGet.loaded && menuGet.error) {
      toast.error(menuGet.error)
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
          <span>{getStatusDelivery(deliveryInfo.status)}</span>
          <button className='info' onClick={() => navigate('/detalhes')}>
            <span>ver mais informa????es</span>
          </button>

          {
            menu.map((item: any, index: number) => (
              <CategorySection
                key={index}
                title={item.name}
                products={item.products}
              />
            ))
          }
          {
            cart.length > 0 && (
              <FloatButton />
            )
          }
        </Container>
      ) : (
        <Loading />
      )}
    </>

  )
}

export default Home