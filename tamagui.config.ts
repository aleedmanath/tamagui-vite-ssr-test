import { createFont, createTamagui, createTokens } from '@tamagui/core'

const interFont = createFont({
  family: 'Inter, Helvetica, Arial, sans-serif',
  size: {
    1: 12,
    2: 14,
    3: 15,
    // ...
  },
  lineHeight: {
    1: 17,
    2: 22,
    3: 25,
    // ...
  },
  weight: {
    4: 300,
    6: 600,
  },
  letterSpacing: {
    4: 0,
    8: -1,
  },
  // you may also set `transform` as textTransform values
  // and `style` as fontStyle values
})

const size = {
  0: 0,
  1: 5,
  2: 10,
  // ....
}

export const tokens = createTokens({
  size,
  space: { ...size, '-1': -5, '-2': -10 },
  radius: { 0: 0, 1: 3 },
  zIndex: { 0: 0, 1: 100, 2: 200 },
  color: {
    white: '#fff',
    black: '#000',
  },
})

const config = createTamagui({
  fonts: {
    // for tamagui, heading and body are assumed
    heading: interFont,
    body: interFont,
  },
  tokens,
  themes: {
    light: {
      bg: '#f2f2f2',
      color: tokens.color.black,
    },
    dark: {
      bg: '#111',
      color: tokens.color.white,
    },
  },
  media: {
    sm: { maxWidth: 860 },
    gtSm: { minWidth: 860 + 1 },
    short: { maxHeight: 820 },
    hoverNone: { hover: 'none' },
    pointerCoarse: { pointer: 'coarse' },
  },

  // optional:

  // add custom shorthand props
  shorthands: {
    px: 'paddingHorizontal',
    f: 'flex',
    w: 'width',
  },

  // override default styles/props on every component
  defaultProps: {
    Text: {
      // override any default props here
    },
  },
})

type AppConfig = typeof config

// this will give you types for your components
// note - if using your own design system, put the package name here instead of tamagui
// declare module 'tamagui' {
//   interface TamaguiCustomConfig extends AppConfig {}
// }

export default config
