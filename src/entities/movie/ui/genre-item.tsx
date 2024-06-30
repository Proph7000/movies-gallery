import { Paper, Typography } from '@mui/material'

interface IProps {
  genre: string
}

export function GenreItem({ genre }: IProps) {
  return (
    <Paper sx={{ p: '4px 8px', borderRadius: 1 }}>
      <Typography variant="body4" display="block" textAlign="center">
        {genre}
      </Typography>
    </Paper>
  )
}
