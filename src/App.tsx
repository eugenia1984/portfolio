import React, { useState, useMemo, createContext } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import './App.css'
import MyApp from './components/template/MyApp'

export const ColorModeContext = createContext({ toggleColorMode: () => { } })

function App() {
  const [mode, setMode] = useState<'light' | 'dark'>('light');
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode],
  );


  return (
    <>
      <ColorModeContext.Provider value={ colorMode }>
        <ThemeProvider theme={ theme }>
          <MyApp />
        </ThemeProvider>
      </ColorModeContext.Provider>
      {/* <div>
          <a href="https://vitejs.dev" target="_blank">
            <img src={ viteLogo } className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={ reactLogo } className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Vite + React</h1> */}
    </>
  )
}

export default App
