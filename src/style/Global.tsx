import { createGlobalStyle, useTheme } from 'styled-components'
// eslint-disable-next-line import/no-unresolved
import { PancakeTheme } from '@pancakeswap/uikit/dist/theme'

declare module 'styled-components' {
  /* eslint-disable @typescript-eslint/no-empty-interface */
  export interface DefaultTheme extends PancakeTheme {}
}
const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Poppins', sans-serif;
  }
  body {
    background: linear-gradient(180deg, #fe4350 0%, #fe6d6f 100%);
    height: auto;
    // img {
    //   height: auto;
    //   max-width: 100%;
    // }
  }
`

export default GlobalStyle
