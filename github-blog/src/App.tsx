import { defaultTheme } from './styles/themes/default'
import { BrowserRouter } from 'react-router-dom'
import { GlobalStyle } from './styles/global'
import { Router } from './Router'
import { ThemeProvider } from 'styled-components'
import { PostsProvider } from './context/PostsContext'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <PostsProvider>
          <Router />
        </PostsProvider>
      </BrowserRouter>

      <GlobalStyle />
    </ThemeProvider>
  )
}
