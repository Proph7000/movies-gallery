import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined'
import StarOutlinedIcon from '@mui/icons-material/StarOutlined'
import { IconButton } from '@mui/material'
import { MouseEvent } from 'react'

interface IProps {
  onClick: (e: MouseEvent<HTMLAnchorElement>) => void
  isFavorite: boolean
}

export function ButtonFavoriteStar({ isFavorite, onClick }: IProps) {
  return (
    <IconButton aria-label="add to favorites" onClick={onClick}>
      {isFavorite ? <StarBorderOutlinedIcon /> : <StarOutlinedIcon />}
    </IconButton>
  )
}
