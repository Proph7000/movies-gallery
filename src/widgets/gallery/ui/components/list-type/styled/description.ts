import { Typography, styled } from '@mui/material'

export const Description = styled(Typography)(() => ({
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  display: 'inline-block',
  marginBottom: '8px',
}))
