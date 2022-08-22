import { DefaultTheme } from "styled-components";
import { Palette } from "./palette";

export const light: DefaultTheme = {
  colors: {
    main: Palette.esmerald[500],
    secondary: Palette.zinc[100],
    background: '#fff',
    palette: Palette
  }
}