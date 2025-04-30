'use client'

import { Box, useTheme } from '@chakra-ui/react'

export const BackgroundGradient = ({ height = '100%', ...props }) => {
  const theme = useTheme()

  const colors = [
    theme.colors.brand?.['800'] ?? '#0B0B0D', // negro espacial
    theme.colors.brand?.['600'] ?? '#1C3A53', // azul profundo
    theme.colors.brand?.['400'] ?? '#47B2E4', // azul cósmico
  ]

  return (
    <Box
      position="absolute"
      top={0}
      left={0}
      width="100%"
      height={height}
      zIndex={-1}
      background={`radial-gradient(circle at top left, ${colors[2]} 0%, ${colors[1]} 30%, ${colors[0]} 100%)`}
      filter="blur(120px)"
      opacity={0.2}
      {...props}
    />
  )
}
