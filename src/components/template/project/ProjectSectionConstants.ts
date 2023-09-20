export const TITLE = new Map<string, string>([
  ['es', 'Proyectos'],
  ['en', 'Projects'],
  ['pt', 'Projetos']
])

export const CARDS = [
  {
    title: 'Binance-L',
    technologies: ['React', 'TypeScript', 'MUI', 'react-dom', 'react-router-dom', 'react-hot-toast', 'swiperjs', 'axios'],
    linkRepository: 'https://github.com/eugenia1984/binance-lite',
    linkDeploy: 'https://binance-l.netlify.app/',
    imgSrc: 'screens/binance-l.png',
    languageTextDescription: new Map<string, string>([
      ['es', 'Rediseño de Binance Lite basado en los principios de simplificación de “The laws of simplicity” de John Maeda, apuntado a crear una interfaz más amigable para los principiantes.'],
      ['en', "Redesign of Binance Lite based on the simplification principles of John Maeda's 'The laws of simplicity', aimed at creating a more user-friendly interface for beginners."],
      ['pt', 'Redesenho da Binance Lite com base nos princípios de simplificação de "As leis da simplicidade" de John Maeda, com o objetivo de criar uma interface mais amigável para iniciantes.']
    ]),
  },
  {
    title: 'Appartamentos',
    technologies: ['React', 'TypeScript', 'MUI', 'react-dom', 'react-router-dom', 'zustand', 'swiperjs', 'dayjs', 'Firebase', 'notistack', 'Formik', 'YUP'],
    linkRepository: 'https://github.com/eugenia1984/c12-25-t-node-react',
    linkDeploy: 'https://appartments-c12-25.vercel.app/',
    imgSrc: 'screens/appartamentos .png',
    languageTextDescription: new Map<string, string>([
      ['es','Aplicación web para encontrar tu propiedad para alquilar o comprar.'],
      ['en','Web application to find your property to rent or buy.'],
      ['pt','Aplicativo da Web para encontrar seu imóvel para alugar ou comprar.']
    ])
  }
]
