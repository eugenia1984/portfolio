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
  PrimaryLightText = '#FFFFFF',
  PrimaryDark = '#D0BCFF',
  PrimaryDarkText = '#381E72',
  SecondaryLight = '#625B71',
  SecondaryBlack = '#CCC2DC',
  ErrorLight = '#B3261E',
  ErrorLightText = '#FFFFFF',
  ErrorBlack = '#F2B8B5',
  ErrorBlackText = '#601410',
  WarningLight = '#7D5260',
  WarningBlack = '#EFB8C8',
  SuccessLight = '#00AA65',
  SuccessLightText = '#FFFFFF',
  SuccessBlack = '#4FDAD2',
  SuccessBlackText = '#003734',
  TextColorLight = '#1C1B1F',
  TextColorBlack = '#E6E1E5',

}
