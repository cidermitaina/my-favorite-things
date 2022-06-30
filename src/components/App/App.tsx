import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

import { Top } from '../../containers/pages/Top'
import { Article } from '../../containers/pages/Article'

export const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Top />} />
        <Route path="article/:id" element={<Article />} />
      </Routes>
    </BrowserRouter>
  )
}

export const GlobalStyle = createGlobalStyle`
  ${reset}

  body {
    font-family: 'Futura', 'Century Gothic',YuGothic,'Yu Gothic','ヒラギノ角ゴシック','Hiragino Sans', 
sans-serif;
  }
`
