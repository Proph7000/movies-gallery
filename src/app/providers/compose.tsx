import { CssBaseline } from '@mui/material'

import { RouterProvider } from './router'
import { ThemeProvider } from './theme'

export function ComposeProviders() {
  return (
    <ThemeProvider>
      <CssBaseline />
      <RouterProvider />
    </ThemeProvider>
  )
}
