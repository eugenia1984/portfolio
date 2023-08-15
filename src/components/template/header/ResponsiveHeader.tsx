import React, { useContext } from 'react'
import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Link,
  Menu,
  MenuItem,
  Select,
  Toolbar,
  Typography
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { useTheme } from '@mui/material/styles'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'
import { ColorModeContext } from '../../../App'
import { useLanguageContext } from '../../../context/LanguageContext'
import { Language } from '../../../utils/types'
import { HEADER_STYLES } from './ResponsiveHeaderStyles'
import { pages } from './ResponsiveHeaderConstants'

interface ResponsiveHeaderProps { }

const ResponsiveHeader: React.FC<ResponsiveHeaderProps> = ({ }) => {
  const theme = useTheme()
  const colorMode = useContext(ColorModeContext)
  const { language, setLanguage } = useLanguageContext()
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null)

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => setAnchorElNav(event.currentTarget)
  const handleCloseNavMenu = () => setAnchorElNav(null)
  const handleLanguageChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setLanguage(event.target.value as Language);
  }

  const colorTextLink: string = theme.palette.mode === 'dark' ? 'white' : 'black'

  return (
    <header>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography variant="h6" noWrap component="a" href="/" sx={ HEADER_STYLES.logoDesktop } >
              María Eugenia Costa
            </Typography>
            <Box sx={ { flexGrow: 1, display: { xs: 'flex', md: 'none' } } }>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={ handleOpenNavMenu }
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={ anchorElNav }
                anchorOrigin={ { vertical: 'bottom', horizontal: 'left' } }
                keepMounted
                transformOrigin={ { vertical: 'top', horizontal: 'left' } }
                open={ Boolean(anchorElNav) }
                onClose={ handleCloseNavMenu }
                sx={ {
                  display: { xs: 'block', md: 'none' },
                } }
              >
                { pages[language].map((page) => (
                  <MenuItem key={ page.title } onClick={ handleCloseNavMenu }>
                    <Typography textAlign="center">
                      <Link href={ page.to } aria-label={ page.title } underline="none">
                        <Box component="span" sx={ { color: colorTextLink } }>
                          { page.title }
                        </Box>
                      </Link>
                    </Typography>
                  </MenuItem>
                )) }
              </Menu>
            </Box>
            <Typography variant="h5" noWrap component="a" href="/" sx={ HEADER_STYLES.logoMobile } >
              MEC
            </Typography>
            <Box sx={ { flexGrow: 1, display: { xs: 'none', md: 'flex' } } }>
              { pages[language].map((page) => (
                <Button
                  key={ page.title }
                  onClick={ handleCloseNavMenu }
                  sx={ { my: 2, color: 'white', display: 'block' } }
                >
                  <Link href={ page.to } aria-label={ page.title } underline="none">
                    <Box component="span" sx={ { color: colorTextLink } }>
                      { page.title }
                    </Box>
                  </Link>
                </Button>
              )) }
            </Box>
            <IconButton sx={ { ml: 1 } } onClick={ colorMode.toggleColorMode } color="inherit">
              { theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon /> }
            </IconButton>
            <Box sx={ { flexGrow: 0 } }>
              <Select value={ language } onChange={ handleLanguageChange }>
                <MenuItem value="es">ES</MenuItem>
                <MenuItem value="en">EN</MenuItem>
                <MenuItem value="pt">PT</MenuItem>
              </Select>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </header>
  )
}

export default ResponsiveHeader