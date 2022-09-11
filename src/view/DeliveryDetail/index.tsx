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
          <span>
            {
              deliveryInfo.hourWork?.monday?.start == "" || deliveryInfo.hourWork?.monday.end == "" ? "fechado" : (
                `${deliveryInfo.hourWork?.monday?.start} até às ${deliveryInfo.hourWork?.monday.end}`
              )
            }
          </span>
        </div>
        <div className='item'>
          <span>Terça-feira</span>
          <span>
            {deliveryInfo.hourWork?.tuesday?.start == "" || deliveryInfo.hourWork?.tuesday.end == "" ? "fechado" : (
              `${deliveryInfo.hourWork?.tuesday?.start} até às ${deliveryInfo.hourWork?.tuesday.end}`
            )
            }
          </span>
        </div>
        <div className='item'>
          <span>Quarta-feira</span>
          <span>
            {deliveryInfo.hourWork?.wednesday?.start == "" || deliveryInfo.hourWork?.wednesday.end == "" ? "fechado" : (
              `${deliveryInfo.hourWork?.wednesday?.start} até às ${deliveryInfo.hourWork?.wednesday.end}`
            )
            }
          </span>
        </div>
        <div className='item'>
          <span>Quinta-feira</span>
          <span>
            {deliveryInfo.hourWork?.thursday?.start == "" || deliveryInfo.hourWork?.thursday.end == "" ? "fechado" : (
              `${deliveryInfo.hourWork?.thursday?.start} até às ${deliveryInfo.hourWork?.thursday.end}`
            )
            }
          </span>
        </div>
        <div className='item'>
          <span>Sexta-feira</span>
          <span>
            {deliveryInfo.hourWork?.friday?.start == "" || deliveryInfo.hourWork?.friday.end == "" ? "fechado" : (
              `${deliveryInfo.hourWork?.friday?.start} até às ${deliveryInfo.hourWork?.friday.end}`
            )
            }
          </span>
        </div>
        <div className='item'>
          <span>Sábado</span>
          <span>
            {deliveryInfo.hourWork?.saturday?.start == "" || deliveryInfo.hourWork?.saturday.end == "" ? "fechado" : (
              `${deliveryInfo.hourWork?.saturday?.start} até às ${deliveryInfo.hourWork?.saturday.end}`
            )
            }
          </span>
        </div>
        <div className='item'>
          <span>Domingo</span>
          <span>
            {deliveryInfo.hourWork?.sunday?.start == "" || deliveryInfo.hourWork?.sunday.end == "" ? "fechado" : (
              `${deliveryInfo.hourWork?.sunday?.start} até às ${deliveryInfo.hourWork?.sunday.end}`
            )
            }
          </span>
        </div>
        <div className='item'>
          <span>Feriado</span>
          <span>
            {deliveryInfo.hourWork?.holiday?.start == "" || deliveryInfo.hourWork?.holiday.end == "" ? "fechado" : (
              `${deliveryInfo.hourWork?.holiday?.start} até às ${deliveryInfo.hourWork?.holiday.end}`
            )
            }
          </span>
        </div>
      </Hour>
    </Container>
  )
}

export default DeliveryDetail