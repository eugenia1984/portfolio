import htmlLogo from './../assets/html-5.svg'
import cssLogo from './../assets/css3.svg'
import bootstrapLogo from './../assets/bootstrap.svg'
import tailwindCssLogo from './../assets/tailwindcss.svg'
import materialLogo from './../assets/material-ui.svg'
import javascriptLogo from './../assets/javascript.svg'
import typescriptLogo from './../assets/typescript.svg'
import reactLogo from './../assets/react.svg'
import figmaLogo from './../assets/figma.svg'
import svnLogo from './../assets/svn.svg'
import javaLogo from './../assets/java.svg'
import wordpressLogo from './../assets/wordpress.svg'
import postgresqlLogo from './../assets/postgresql.svg'
import redisLogo from './../assets/redis.svg'
import jiraLogo from './../assets/jira.svg'
import gitLogo from './../assets/git.svg'
import gitlabLogo from './../assets/gitlab.svg'
import yarnLogo from './../assets/yarn.svg'
import npmLogo from './../assets/npm.svg'
import vscLogo from './../assets/vsc.svg'
import intellijLogo from './../assets/intellij.svg'
import nextjsLogo from './../assets/nextjs.svg'
import swaggerLogo from './../assets/swagger.svg'
import kuarkusLogo from './../assets/kuarkus.svg'
import cpaneLogo from './../assets/cpanel.svg'
import phpmyadminLogo from './../assets/phpmyadmin.svg'
import axiosLogo from './../assets/axios.svg'
import reportLogo from '../assets/report.svg'

/* To show the technologies icons at the about section */
export const pictures = [
  { src: htmlLogo, alt: 'HTML5' },
  { src: cssLogo, alt: 'CSS3' },
  { src: bootstrapLogo, alt: 'Bootstrap' },
  { src: tailwindCssLogo, alt: 'TailwindCSS3' },
  { src: materialLogo, alt: 'Material UI' },
  { src: javascriptLogo, alt: 'JavaScript' },
  { src: typescriptLogo, alt: 'TypeScript' },
  { src: reactLogo, alt: 'React' },
  { src: nextjsLogo, alt: 'Nextjs' },
  { src: figmaLogo, alt: 'Figma' }
]

/* To show the technologies icons at the experience section */
export const technologies = [
  { src: htmlLogo, alt: 'HTML5' },
  { src: cssLogo, alt: 'CSS3' },
  { src: bootstrapLogo, alt: 'Bootstrap' },
  { src: tailwindCssLogo, alt: 'TailwindCSS3' },
  { src: materialLogo, alt: 'Material UI' },
  { src: javascriptLogo, alt: 'JavaScript' },
  { src: javascriptLogo, alt: 'dayjs' },
  { src: typescriptLogo, alt: 'TypeScript' },
  { src: reactLogo, alt: 'React' },
  { src: reactLogo, alt: 'react-router-dom' },
  { src: reactLogo, alt: 'react-hook-forms' },
  { src: figmaLogo, alt: 'Figma' },
  { src: svnLogo, alt: 'SVN' },
  { src: javaLogo, alt: 'Java 11' },
  { src: wordpressLogo, alt: 'WordPress' },
  { src: postgresqlLogo, alt: 'Postgresql' },
  { src: postgresqlLogo, alt: 'pgAdmin' },
  { src: redisLogo, alt: 'Redis' },
  { src: jiraLogo, alt: 'Jira' },
  { src: gitLogo, alt: 'Git' },
  { src: gitlabLogo, alt: 'GitLab' },
  { src: yarnLogo, alt: 'Yarn' },
  { src: npmLogo, alt: 'npm' },
  { src: vscLogo, alt: 'Visual Studio Code' },
  { src: intellijLogo, alt: 'IntelliJ' },
  { src: swaggerLogo, alt: 'Swagger' },
  { src: kuarkusLogo, alt: 'Kuarkus' },
  { src: cpaneLogo, alt: 'cPanel' },
  { src: phpmyadminLogo, alt: 'phpMyAdmin' },
  { src: nextjsLogo, alt: 'Nextjs' },
  { src: axiosLogo, alt: 'axios' },
  { src: reportLogo, alt: 'JasperReport'}
]

export const YEAR = new Date().getFullYear()

/* Regular expression that validates: at least 3 letters */
export const nameRegex = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]{3,}$/

export const emailRegex = /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/

/* To change from light to dark the theme mode */
export enum ThemeMode {
  Light = 'light',
  Dark = 'dark',
}

/* Color constant to theme Pallete */
export enum Colors {
  PrimaryLight = '#6750A4',
  PrimaryLightText = '#F5F5F5',
  PrimaryDark = '#D0BCFF',
  PrimaryDarkText = '#381E72',
  SecondaryLight = '#625B71',
  SecondaryBlack = '#CCC2DC',
  ErrorLight = '#B3261E',
  ErrorLightText = '#FAFAFA',
  ErrorBlack = '#F2B8B5',
  ErrorBlackText = '#601410',
  WarningLight = '#7D5260',
  WarningBlack = '#EFB8C8',
  SuccessLight = '#00AA65',
  SuccessLightText = '#FAFAFB',
  SuccessBlack = '#4FDAD2',
  SuccessBlackText = '#003734',
  TextColorLight = '#1C1B1F',
  TextColorBlack = '#E6E1E5',
}
