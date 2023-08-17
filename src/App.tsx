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
        typography: {
          fontFamily: 'Nunito, Nunito Sans, sans-serif',
          h1: {
            fontSize: '28px',
            lineHeight: '40px',
            fontWeight: 700,
          },
          h2: {
            fontSize: '26px',
            lineHeight: '30px',
            fontWeight: 600,
          },
          h3: {
            fontSize: '18px',
            lineHeight: '24px',
            fontWeight: 700,
          },
          h4: {
            fontSize: '18px',
            lineHeight: '24px',
            fontWeight: 600,
          },
          h5: {
            fontSize: '15px',
            lineHeight: '21px',
            fontWeight: 500,
          },
        },
        components: {
          MuiButton: {
            defaultProps: {
              disableRipple: true,
            },
            styleOverrides: {
              root: {
                borderRadius: 16,
                fontStyle: 'normal',
                fontSize: '16px',
                padding: '13px 20px',
              },
              text: {
                '&.Mui-focusVisible': {
                  backgroundColor: '#BFBFBF',
                },
                ':hover': {
                  backgroundColor: '#BFBFBF',
                },
              },
              outlined: {
                border: '2px solid',
                ':hover': {
                  border: '2px solid',
                  background: 'rgba(18, 38, 170, 0.1)',
                },
                ':focus': {
                  color: 'white',
                  background: '#1226AA',
                },
                '&.Mui-disabled': {
                  border: '2px solid #8F9193',
                  color: '#8F9193',
                },
              },
              containedPrimary: {
                background: '#1B17E7',
                ':hover': {
                  backgroundColor:
                    'linear-gradient(270deg, #1226AA 0%, #121A52 103.21%)',
                },
                ':focus': {
                  backgroundColor: '#121A52',
                },
                '&.Mui-disabled': {
                  background: '#8F9193',
                  color: 'white',
                },
              },
            },
          }
        }
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
