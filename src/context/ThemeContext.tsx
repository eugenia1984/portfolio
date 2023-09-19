import React, { ReactNode, createContext, useContext, useState } from 'react'
import { createTheme, ThemeProvider as MuiThemeProvider } from '@mui/material/styles'
import { Colors, ThemeMode } from '../utils/constants'

interface ThemeContextType {
  themeMode: ThemeMode
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme debe ser usado dentro de un ThemeProvider')
  }
  return context
}

interface ThemeProviderProps {
  children: ReactNode
}
export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [themeMode, setThemeMode] = useState(ThemeMode.Light)

  const toggleTheme = () => {
    setThemeMode(prevMode => prevMode === ThemeMode.Light ? ThemeMode.Dark : ThemeMode.Light)
  }

  return (
    <ThemeContext.Provider value={ { themeMode, toggleTheme } }>
      { children }
    </ThemeContext.Provider>
  )
}

interface CustomThemeProviderProps {
  children: ReactNode
}

export const CustomThemeProvider: React.FC<CustomThemeProviderProps> = ({ children }) => {
  const { themeMode } = useTheme()

  const theme = React.useMemo(() => {
    return createTheme({
      palette: {
        mode: themeMode,
        primary: {
          main: themeMode === ThemeMode.Light ? Colors.PrimaryLight : Colors.PrimaryDark,
        },
        secondary: {
          main: themeMode === ThemeMode.Light ? Colors.SecondaryLight : Colors.SecondaryBlack,
        },
        error: {
          main: themeMode === ThemeMode.Light ? Colors.ErrorLight : Colors.ErrorBlack,
        },
        warning: {
          main: themeMode === ThemeMode.Light ? Colors.WarningLight : Colors.WarningBlack,
        },
        success: {
          main: themeMode === ThemeMode.Light ? Colors.SuccessLight : Colors.SuccessBlack,
        },
      },
      typography: {
        fontFamily: 'Nunito, Nunito Sans, sans-serif',
        h1: {
          fontSize: '28px',
          lineHeight: '40px',
          fontWeight: 700,
          color: themeMode === ThemeMode.Light ? Colors.TextColorLight : Colors.TextColorBlack,
        },
        h2: {
          fontSize: '26px',
          lineHeight: '30px',
          fontWeight: 600,
          color: themeMode === ThemeMode.Light ? Colors.TextColorLight : Colors.TextColorBlack,
        },
        h3: {
          fontSize: '20px',
          lineHeight: '24px',
          fontWeight: 700,
          color: themeMode === ThemeMode.Light ? Colors.TextColorLight : Colors.TextColorBlack,
        },
        h4: {
          fontSize: '18px',
          lineHeight: '24px',
          fontWeight: 600,
          color: themeMode === ThemeMode.Light ? Colors.TextColorLight : Colors.TextColorBlack,
        },
        h5: {
          fontSize: '15px',
          lineHeight: '21px',
          fontWeight: 500,
          color: themeMode === ThemeMode.Light ? Colors.TextColorLight : Colors.TextColorBlack,
        },
        body1: {
          fontFamily: 'Montserrat, sans-serif',
          fontSize: '14px',
          lineHeight: '24px',
          fontWeight: 400,
          color: themeMode === ThemeMode.Light ? Colors.TextColorLight : Colors.TextColorBlack,
        },
        body2: {
          fontFamily: 'Montserrat, sans-serif',
          fontSize: '15px',
          lineHeight: '25px',
          fontWeight: 300,
          color: themeMode === ThemeMode.Light ? Colors.TextColorLight : Colors.TextColorBlack,
        },
        caption: {
          fontFamily: 'Montserrat, sans-serif',
          fontSize: '11px',
          lineHeight: '15px',
          fontWeight: 600,
          color: themeMode === ThemeMode.Light ? Colors.TextColorLight : Colors.TextColorBlack,
        },
        button: {
          fontSize: '15px',
          lineHeight: '21px',
          fontWeight: 700,
          textTransform: 'none',
          color: themeMode === ThemeMode.Light ? Colors.TextColorLight : Colors.TextColorBlack,
        },
      },
      components: {
        MuiTextField: {
          defaultProps: {
            variant: 'filled',
          },
          styleOverrides: {
            root: {
              input: {
                '&[type=number]': {
                  MozAppearance: 'textfield',
                },
                '&::-webkit-outer-spin-button': {
                  WebkitAppearance: 'none',
                  margin: 0,
                },
                '&::-webkit-inner-spin-button': {
                  WebkitAppearance: 'none',
                  margin: 0,
                },
              },
            },
          },
        },
        MuiInputLabel: {
          defaultProps: {
            shrink: true,
          },
          styleOverrides: {
            root: {
              '&.Mui-error': {
                color: 'black',
              },
              '&.Mui-focused': {
                color: 'black',
              },
            },
          },
        },
        MuiFilledInput: {
          defaultProps: {
            disableUnderline: true,
            size: 'small',
          },
          styleOverrides: {
            root: ({ theme }) => ({
              border: '2px solid #C7C8C8',
              overflow: 'hidden',
              backgroundColor: themeMode === ThemeMode.Light ? '#FFFFFF' : '#1C1C19',
              borderRadius: 16,
              transition: theme.transitions.create([
                'border-color',
                'background-color',
                'box-shadow',
              ]),
              ':hover': {
                backgroundColor: themeMode === ThemeMode.Light ? '#FFFFFF' : '#1C1C19',
              },
              '&.Mui-error': {
                borderColor: '#CD1812',
              },
            }),
          },
        },
        MuiSelect: {
          defaultProps: {
            variant: 'filled',
          },
        },
        MuiButton: {
          defaultProps: {
            disableRipple: true,
          },
          styleOverrides: {
            root: {
              borderRadius: '16px',
              fontStyle: 'normal',
              fontSize: '16px',
              padding: '6px 16px',
            },
            text: {
              '&.Mui-focusVisible': {
                backgroundColor: themeMode === ThemeMode.Light ? '#EADDFF' : '#4F378B',
              },
              ':hover': {
                backgroundColor: themeMode === ThemeMode.Light ? '#21005D' : '#EADDFF',
              },
            },
            outlined: {
              border: '2px solid',
              ':hover': {
                border: '2px solid',
                background: 'rgba(18, 38, 170, 0.1)',
                boxShadow: themeMode === ThemeMode.Light ?
                  '0 4px 8px rgba(0, 0, 0, 0.2), 0 6px 20px rgba(0, 0, 0, 0.15)'
                  : '0 4px 8px rgba(250, 250, 250, 0.2), 0 6px 20px rgba(250, 250, 250, 0.15)',
              },
              ':focus': {
                color: 'white',
                background: '#1226AA',
              },
              '&.Mui-disabled': {
                border: themeMode === ThemeMode.Light ? '2px solid #79747E' : '2px solid #938F99',
                color: themeMode === ThemeMode.Light ? '2px solid #79747E' : '2px solid #938F99',
              },
            },
            containedPrimary: {
              color: themeMode === ThemeMode.Light ? Colors.PrimaryLightText : Colors.PrimaryDarkText,
              backgroundColor: themeMode === ThemeMode.Light ? Colors.PrimaryLight : Colors.PrimaryDark,
            },
          },
        },
        MuiTableCell: {
          styleOverrides: {
            root: {
              fontFamily: 'Nunito, sans-serif',
              fontWeight: 600,
              fontSize: '15px',
              lineHeight: '21px',
              color: '#202327',
              textAlign: 'left',
              borderBottom: 'none',
            },
            head: {
              color: '#555555',
              fontSize: '13px',
              lineHeight: '15px',
              fontFamily: 'Nunito Sans, sans-serif',
            },
          },
        },
        MuiTableRow: {
          styleOverrides: {
            root: {
              ':nth-of-type(odd)': {
                background: 'rgba(231,233,247,0.4)',
              },
            },
            head: {
              backgroundColor: '#fff !important',
            },
          },
        },
        MuiSwitch: {
          styleOverrides: {
            root: ({ theme }) => ({
              width: 32,
              height: 18,
              padding: 0,
              display: 'flex',
              ':active': {
                '& .MuiSwitch-thumb': {
                  width: 15,
                },
              },
              '& .MuiSwitch-switchBase.Mui-checked': {
                transform: 'translateX(14px) !important',
              },
              '& .MuiSwitch-switchBase': {
                padding: 2,
                '&.Mui-checked': {
                  transform: 'translateX(12px)',
                  color: '#fff',
                  '& + .MuiSwitch-track': {
                    opacity: 1,
                    backgroundColor: theme.palette.primary.main,
                  },
                },
              },
              '& .Mui-focusVisible': {
                backgroundColor: '#1226AA',
                color: '#F1F2FA',
              },
              '& .Mui-checked.Mui-focusVisible': {
                backgroundColor: 'black',
                color: 'white',
              },
              '& .MuiSwitch-thumb': {
                boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
                width: 14,
                height: 14,
                borderRadius: 6,
                transition: theme.transitions.create(['width'], {
                  duration: 200,
                }),
              },
              '& .MuiSwitch-track': {
                borderRadius: 16 / 2,
                opacity: 1,
                backgroundColor:
                  theme.palette.mode === 'dark'
                    ? 'rgba(255,255,255,.35)'
                    : 'rgba(0,0,0,.25)',
                boxSizing: 'border-box',
                '.Mui-checked.Mui-checked + &': {
                  // Controls checked color for the track
                  opacity: 0.1,
                  backgroundColor: '#fff',
                },
              },
            }),
          },
        },
        MuiTypography: {
          styleOverrides: {
            //@ts-ignore
            anchor: {
              ':hover': {
                cursor: 'pointer',
              },
            },
          },
        },
        MuiDialog: {
          styleOverrides: {
            paper: {
              borderRadius: '8px',
            },
          },
        },
        MuiSnackbar: {
          styleOverrides: {
            root: {
              '& .MuiSnackbarContent-root': {
                padding: '1em',
                fontSize: '15px',
                lineHeight: '17px',
                color: themeMode === ThemeMode.Light ? 'white' : 'black',
                backgroundColor: themeMode === ThemeMode.Light ? '2px solid #1C1B1F' : '2px solid #E6E1E5',
              },
            },
          },
        },
        MuiAutocomplete: {
          // fix popper wont open
          defaultProps: {
            componentsProps: {
              popper: {
                sx: {
                  height: 0,
                },
              },
              paper: {
                sx: {
                  width: 'max-content',
                },
              },
            },
          },
        },
        MuiDatePicker: {
          // fix popper wont open
          defaultProps: {
            PopperProps: {
              sx: {
                height: 0,
              },
            },
          },
        },
        MuiChip: {
          styleOverrides: {
            colorPrimary: ({ theme }) => ({
              background: themeMode === ThemeMode.Light ? '#E6E1E5' : '#1C1B1F',
              borderRadius: '8px',
              fontSize: '12px',
              fontWeight: 700,
              color: theme.palette.primary.main,
            }),
          },
        },
        MuiDivider: {
          styleOverrides: {
            root: {
              borderColor: themeMode === ThemeMode.Light ? Colors.PrimaryLight : Colors.PrimaryDark,
              borderWidth: '1px',
            },
          },
        },
        MuiAlert: {
          defaultProps: {
            style: {
              borderRadius: '0.8rem',
              fontSize: '1rem',
            },
          },
          styleOverrides: {
            standardError: {
              border: `1px solid ${ themeMode === ThemeMode.Light ? Colors.ErrorLight : Colors.ErrorBlack }`,
              background: themeMode === ThemeMode.Light ? Colors.ErrorLight : Colors.ErrorBlack,
              color: themeMode === ThemeMode.Light ? Colors.ErrorLightText : Colors.ErrorBlackText,
            },
            standardSuccess: {
              border: `1px solid ${ themeMode === ThemeMode.Light ? Colors.SuccessLight : Colors.SuccessBlack }`,
              background: themeMode === ThemeMode.Light ? Colors.SuccessLight : Colors.SuccessBlack,
              color: themeMode === ThemeMode.Light ? Colors.SuccessLightText : Colors.SuccessBlackText,
            },
          },
        },
      }
    });
  }, [themeMode])

  return <MuiThemeProvider theme={ theme }>{ children }</MuiThemeProvider>
}