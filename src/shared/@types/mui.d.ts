import {
  ButtonBaseTypeMap,
  ButtonTypeMap,
  ExtendButtonBaseTypeMap,
} from '@mui/material'
import {
  OverridableComponent,
  OverridableTypeMap,
  OverrideProps,
} from '@mui/material/OverridableComponent'
import React from 'react'

declare module '@mui/material/Button' {
  export type ButtonProps<
    D extends React.ElementType = ButtonTypeMap['defaultComponent'],
    P = object & IButtonProps,
  > = OverrideProps<ButtonTypeMap<P, D>, D>
}

declare module '@mui/material/ButtonBase' {
  export type ButtonBaseProps<
    D extends React.ElementType = ButtonBaseTypeMap['defaultComponent'],
    P = IButtonProps,
  > = OverrideProps<ButtonBaseTypeMap<P, D>, D>

  export type ExtendButtonBase<M extends OverridableTypeMap> = ((
    props: { href?: string } & IButtonProps &
      OverrideProps<ExtendButtonBaseTypeMap<M>, 'a'>
  ) => JSX.Element) &
    OverridableComponent<ExtendButtonBaseTypeMap<M>>
}

declare module '@mui/material/Link' {
  interface LinkOwnProps {
    component?: React.ElementType
  }
}
