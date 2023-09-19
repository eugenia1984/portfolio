import React, { useState } from 'react'
import { AppBar, Box, Button, Container, IconButton, FormControl, Menu, MenuItem, Toolbar, Typography } from '@mui/material'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import { Link } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu'
import { useTheme } from '../../../context/ThemeContext'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'
import { useLanguageContext } from '../../../context/LanguageContext'
import { Language } from '../../../utils/types'
import { HEADER_STYLES } from './ResponsiveHeaderStyles'
import { pages } from './ResponsiveHeaderConstants'
import './ResponsiveHeader.css'

const ResponsiveHeader: React.FC = () => {
  const { themeMode, toggleTheme } = useTheme()
  const { language, setLanguage } = useLanguageContext()
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null)

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => setAnchorElNav(event.currentTarget)
  const handleCloseNavMenu = () => setAnchorElNav(null)
  const handleLanguageChange = (event: SelectChangeEvent) => {
    setLanguage(event.target.value as Language)
  }

  return (
    <AppBar position="sticky">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link to="/" aria-label="home" style={ { textDecoration: 'none' } }>
            <Typography component="h1" sx={ HEADER_STYLES.logoDesktop }>
              María Eugenia Costa
            </Typography>
          </Link>
          <Box sx={ HEADER_STYLES.menuMobileContainer }>
            <IconButton
              size="large"
              aria-label="menu"
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
              sx={ HEADER_STYLES.menuMobile }
            >
              { pages[language].map((page) => (
                <MenuItem
                  key={ page.title }
                  onClick={ handleCloseNavMenu }
                >
                  <Typography textAlign="center">
                    <Link to={ page.to } aria-label={ page.title } style={ { textDecoration: 'none' } }>
                      <Box
                        component="span"
                        sx={ {
                          textDecoration: 'none',
                          color: `${ themeMode === 'dark' ? 'white!important' : '#6750A4!important' }`
                        } }>
                        { page.title }
                      </Box>
                    </Link>
                  </Typography>
                </MenuItem>
              )) }
            </Menu>
          </Box>
          <Link to="/" aria-label="home" style={ { textDecoration: 'none' } }>
            <Typography
              variant="h1"
              noWrap
              component="h1"
              sx={ HEADER_STYLES.logoMobile }
            >
              MEC
            </Typography>
          </Link>
          <Box sx={ HEADER_STYLES.menuDesktopContainer }>
            { pages[language].map((page) => (
              <Button
                key={ page.title }
                onClick={ handleCloseNavMenu }
                sx={ {
                  my: 2,
                  display: 'block',
                  '&:hover': {
                    color: `${ themeMode === 'dark' ? 'black!important' : 'white!important' }`
                  }
                } }
                aria-label={ page.title }
              >
                <Link to={ page.to } aria-label={ page.title } style={ { textDecoration: 'none' } } >
                  <Typography
                    sx={ {
                      color: '#fff', '&:hover': {
                        color: `${ themeMode === 'dark' ? 'black!important' : 'white!important' }`
                      }
                    } }
                  >
                    { page.title }
                  </Typography>
                </Link>
              </Button>
            )) }
          </Box>
          <IconButton
            sx={ { margin: '0rem 0.1rem' } }
            onClick={ toggleTheme }
            color="inherit"
          >
            { themeMode === 'dark' ?
              <Brightness7Icon /> : <Brightness4Icon />
            }
          </IconButton>
          <Box sx={ { flexGrow: 0 } }>
            <form>
              <FormControl variant="filled">
                <Select
                  id="language"
                  value={ language }
                  onChange={ handleLanguageChange }
                  className="lenguage-select"
                >
                  <MenuItem value="es" className="lenguage-select-option">Español</MenuItem>
                  <MenuItem value="en" className="lenguage-select-option">English</MenuItem>
                  <MenuItem value="pt" className="lenguage-select-option">Português</MenuItem>
                </Select>
              </FormControl>
            </form>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default ResponsiveHeader