import 'styled-components'
import { IPalette } from './IPalette';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      main: string
      secondary: string
      background: string
      palette: IPalette
    }
  }
}