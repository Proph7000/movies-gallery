import { CardMedia, styled } from '@mui/material'
import { ElementType } from 'react'

interface IProps {
  component: ElementType
  alt: string
}

export const ListCardMedia = styled(CardMedia)<IProps>(() => ({
  objectFit: 'contain',
  flexBasis: 200,
  maxWidth: 150,
  flexShrink: 1,
}))
