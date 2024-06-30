import { createTheme, ThemeProvider as MuiThemeProvider } from '@mui/material'
import { forwardRef, PropsWithChildren } from 'react'
import {
  Link as RouterLink,
  LinkProps as RouterLinkProps,
} from 'react-router-dom'

// eslint-disable-next-line react/display-name
const LinkBehavior = forwardRef<
  HTMLAnchorElement,
  Omit<RouterLinkProps, 'to'> & {
    href: RouterLinkProps['to']
  }
>((props, ref) => {
  const { href, ...other } = props

  // Map href (MUI) -> to (react-router)
  return <RouterLink ref={ref} to={href} {...other} />
})

const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        'ul, li, ol': {
          margin: 0,
          padding: 0,
        },
      },
    },
    MuiButtonBase: {
      defaultProps: { LinkComponent: LinkBehavior },
    },
  },
})

export function ThemeProvider({ children }: PropsWithChildren) {
  return <MuiThemeProvider theme={theme} children={children} />
}
