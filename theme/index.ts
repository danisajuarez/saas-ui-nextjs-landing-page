import { extendTheme } from '@chakra-ui/react'
import '@fontsource-variable/inter'
import { theme as baseTheme } from '@saas-ui/react'

import components from './components'
import { fontSizes } from './foundations/typography'

export const theme = extendTheme(
  {
    config: {
      initialColorMode: 'dark',
      useSystemColorMode: false,
    },
    styles: {
      global: {
        body: {
          fontSize: 'lg',
          color: 'gray.800',
          bg: 'white',
          _dark: {
            color: 'whiteAlpha.900',
            bg: '#0B0B0D',
          },
        },
        p: {
          color: 'gray.700',
          _dark: { color: 'gray.300' },
        },
        span: {
          color: 'gray.700',
          _dark: { color: 'gray.300' },
        },
      },
    },
    colors: {
      brand: {
        50: '#E6F7FB',
        100: '#B3E4F5',
        200: '#80D1F0',
        300: '#4DBEEA',
        400: '#47B2E4', // azul cósmico
        500: '#3891BA',
        600: '#2A6E8F',
        700: '#1C4C64',
        800: '#0B0B0D', // negro espacial
        900: '#080A0C',
      },
      gray: {
        50: '#F9FAFB',
        100: '#F3F4F6',
        200: '#E5E7EB',
        300: '#D1D5DB',
        400: '#9CA3AF',
        500: '#6B7280',
        600: '#4B5563',
        700: '#374151',
        800: '#1F2937',
        900: '#111827',
      },
      muted: {
        light: '#4B5563', // en modo claro
        dark: '#CBD5E1', // en modo oscuro
      },
    },

    fonts: {
      heading: 'Inter Variable, Inter, sans-serif',
      body: 'Inter Variable, Inter, sans-serif',
    },
    fontSizes,
    components,
  },
  baseTheme,
)
