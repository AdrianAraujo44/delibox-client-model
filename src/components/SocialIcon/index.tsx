import { IoLogoFacebook, IoLogoInstagram, IoLogoTwitch, IoLogoTwitter, IoLogoWhatsapp, IoLogoYoutube } from "react-icons/io5";
import { useTheme } from 'styled-components'

import {
  Container
} from './styles'

interface ISocial {
  social: string,
  url ?: string
}

function SocialIcon ({social}: ISocial) {
  const { colors } = useTheme()

  const chooseSocial = () => {
    switch (social)  {
      case "whatsapp":
        return (
          <IoLogoWhatsapp size={25} color={colors.palette.zinc[500]}/>
        )
      case "youtube":
        return (
          <IoLogoYoutube size={25} color={colors.palette.zinc[500]} />
        )
      case "instagram":
        return (
          <IoLogoInstagram size={25} color={colors.palette.zinc[500]} />
        )
      case "twitter":
        return (
          <IoLogoTwitter size={25} color={colors.palette.zinc[500]} />
        )
      case "facebook":
        return (
          <IoLogoFacebook size={25} color={colors.palette.zinc[500]} />
        )
    }
  }

  return (
    <Container>
      {chooseSocial()}
    </Container>
  )
}

export default SocialIcon