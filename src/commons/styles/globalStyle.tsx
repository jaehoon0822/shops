import { Global, css } from '@emotion/react'
import { GlobalStyles as BaseStyles } from 'twin.macro'

const customStyle = css`
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;500;700&family=Roboto:wght@400;500;700&display=swap');
  * {
    box-sizing: border-box;
  }
  body {
    font-family: 'Noto Sans KR', 'Roboto', sans-serif;
  }
`

const GlobalStyles = () => (
  <>
    <BaseStyles />
    <Global styles={customStyle} />
  </>
)

export default GlobalStyles
