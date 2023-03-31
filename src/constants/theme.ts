const customMediaQuery = (maxWidth: number) => `@media (max-width: ${maxWidth}px)`

// for passing of custom value
const customValue = (val: number) => `${val}rem`

interface IMediaQueriesBreakpoints {
  custom: (maxNumber: number) => string
  xs: string
  sm: string
  md: string
  lg: string
  xl: string
  xxl: string
}

const media: IMediaQueriesBreakpoints = {
  custom: customMediaQuery,
  xs: customMediaQuery(330),
  sm: customMediaQuery(592),
  md: customMediaQuery(768),
  lg: customMediaQuery(992),
  xl: customMediaQuery(1024),
  xxl: customMediaQuery(1200),
}

const colors = {
  primary: '#A1B56C',
  neutral: '#D8D8D8',
  black: '#000',
  white: '#fff',

  background: {
    default: '#151515',
    light: '#1B1B1B',
  },
}

const fontSizes = {
  sm: '12px',
  md: '16px',
  lg: '22px',
  custom: customValue,
}

const spacing = {
  xs: '10px',
  sm: '14px',
  md: '22px',
  custom: customValue,
}

const fonts = {
  body: ['sans-serif', 'Roboto'],
}

export const theme = {
  colors,
  fonts,
  fontSizes,
  media,
  spacing,
}
