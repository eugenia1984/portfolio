export const HERO_STYLES = {
  container: {
    padding: '10px 0.5rem 1.75rem ',
    maxWidth: '1400px',
    margin: '0 auto',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: {
      xs: 'column',
      sm: 'row'
    },
    flexWrap: 'wrap',
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center'
  },
  containerPresentation: { 
    flexDirection: 'column',
    flexWrap: 'wrap' ,
    display: 'flex', 
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center' 
  } ,
  introContainer: {
    maxWidth: '300px',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'flex-start',
    height: {
      xs: '200px',
      sx: '100%'
    },
    gap: '6px'
  },
  gridItemImg: {
    display: 'flex',
    flexWrap: 'wrap',
    alignContent: 'center',
    justifyContent: {
      xs: 'center',
      sm: 'flex-start'
    }
  }
}