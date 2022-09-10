import { useEffect } from 'react'
import { IoArrowBack, IoLogoFacebook, IoLogoInstagram, IoLogoTwitter, IoLogoWhatsapp, IoLogoYoutube, IoStorefrontSharp } from 'react-icons/io5'
import { RiWhatsappFill, RiInstagramFill } from 'react-icons/ri'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useTheme } from 'styled-components'
import { useDeliveryInfo } from '../../hooks/useDeliveryInfo'
import useRequestGet from '../../hooks/useRequestGet'

import {
  Container,
  Info,
  Hour
} from './styles'

function DeliveryDetail() {
  const navigate = useNavigate()
  const { deliveryInfo, setDeliveryInfo } = useDeliveryInfo()
  const deliveryGet = useRequestGet()
  const { colors } = useTheme()

  useEffect(() => {
    if (deliveryInfo.name == null) {
      deliveryGet.requestGet(`/delivery/${import.meta.env.VITE_DELIVERY_ID}`)
    }
  }, [])

  useEffect(() => {
    if (deliveryGet.loaded && !deliveryGet.error) {
      setDeliveryInfo(deliveryGet.data)
    } else if (deliveryGet.loaded && deliveryGet.error) {
      toast.error(deliveryGet.error)
    }
  }, [deliveryGet.data, deliveryGet.loaded, deliveryGet.error])

  return (
    <Container>
      <header>
        <button type="button">
          <IoArrowBack size={20} onClick={() => navigate('/')} />
        </button>
        <span>voltar</span>
      </header>

      <h1>{deliveryInfo.name}</h1>

      <Info>
        <span>
          <IoStorefrontSharp
            size={`${deliveryInfo.address?.street} - ${deliveryInfo.address?.number} - ${deliveryInfo.address?.neighborhood}`.length < 20 ? 25 : 30}
            color={colors.palette.zinc[500]} />
          {deliveryInfo.address?.street} - {deliveryInfo.address?.number} - {deliveryInfo.address?.neighborhood}
        </span>
        {
          deliveryInfo.social?.whatsapp != "" && (
            <span>
              <RiWhatsappFill size={25} color={colors.palette.zinc[500]} />
              {deliveryInfo.social?.whatsapp}
            </span>
          )
        }

        {
          deliveryInfo.social?.youtube != "" && (
            <span>
              <IoLogoYoutube size={25} color={colors.palette.zinc[500]} />
              {deliveryInfo.social?.youtube}
            </span>
          )
        }

        {deliveryInfo.social?.instagram != "" && (
          <span>
            <RiInstagramFill size={25} color={colors.palette.zinc[500]} />
            {deliveryInfo.social?.instagram}
          </span>
        )}

        {deliveryInfo.social?.twitter != "" && (
          <span>
            <IoLogoTwitter size={25} color={colors.palette.zinc[500]} />
            {deliveryInfo.social?.twitter}
          </span>
        )}

        {deliveryInfo.social?.facebook != "" && (
          <span>
            <IoLogoFacebook size={25} color={colors.palette.zinc[500]} />
            {deliveryInfo.social?.facebook}
          </span>
        )}
      </Info>

      <Hour>
        <h2>Horário de funcionamento</h2>
        <div className='item'>
          <span>Segunda-feira</span>
          <span>{deliveryInfo.hourWork?.monday?.am?.start} - {deliveryInfo.hourWork?.monday.am?.end} </span>
        </div>
        <div className='item'>
          <span>Terça-feira</span>
          <span>{deliveryInfo.hourWork?.tuesday?.am?.start} - {deliveryInfo.hourWork?.tuesday.am?.end} </span>
        </div>
        <div className='item'>
          <span>Quarta-feira</span>
          <span>{deliveryInfo.hourWork?.wednesday?.am?.start} - {deliveryInfo.hourWork?.wednesday.am?.end} </span>
        </div>
        <div className='item'>
          <span>Quinta-feira</span>
          <span>{deliveryInfo.hourWork?.thursday?.am?.start} - {deliveryInfo.hourWork?.thursday.am?.end} </span>
        </div>
        <div className='item'>
          <span>Sexta-feira</span>
          <span>{deliveryInfo.hourWork?.friday?.am?.start} - {deliveryInfo.hourWork?.friday.am?.end} </span>
        </div>
        <div className='item'>
          <span>Sábado</span>
          <span>{deliveryInfo.hourWork?.saturday?.am?.start} - {deliveryInfo.hourWork?.saturday.am?.end} </span>
        </div>
        <div className='item'>
          <span>Domingo</span>
          <span>{deliveryInfo.hourWork?.sunday?.am?.start} - {deliveryInfo.hourWork?.sunday.am?.end} </span>
        </div>
        <div className='item'>
          <span>Feriado</span>
          <span>{deliveryInfo.hourWork?.holiday?.am?.start} - {deliveryInfo.hourWork?.holiday.am?.end} </span>
        </div>
      </Hour>
    </Container>
  )
}

export default DeliveryDetail