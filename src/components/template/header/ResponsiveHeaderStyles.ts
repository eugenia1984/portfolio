export const HEADER_STYLES = {
  logoDesktop: {
    display: { xs: 'none', sm: 'flex' },
    fontFamily: 'monospace',
    fontWeight: 700,
    textDecoration: 'none',
    fontSize: '18px',
    color: '#fff'
  },
  logoMobile: {
    mr: 1,
    display: { xs: 'flex', sm: 'none' },
    flexGrow: 1,
    fontFamily: 'monospace',
    fontWeight: 700,
    letterSpacing: '.1rem',
    color: '#fff',
    textDecoration: 'none',
  },
  menuMobileContainer: {
    flexGrow: 1,
    display: {
      xs: 'flex',
      sm: 'none'
    }
  },
  menuMobile: {
    display: {
      xs: 'block',
      sm: 'none'
    },
  },
  menuDesktopContainer: {
    flexGrow: 1,
    display: {
      xs: 'none',
      sm: 'flex'
    },
    justifyContent: {
      xs: 'none',
      sm: 'flex-end'
    },
    gap: '12px',
    marginLeft: '12px'
  }
}